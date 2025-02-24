import type { Plugin } from 'vite'
import type { WatchOptions } from 'chokidar'
import chokidar from 'chokidar'
import type { Options } from 'openapi-typescript-codegen'

interface PluginOptions extends Omit<Options, 'output'> {
  input: string
  output?: string
  watch?: Pick<WatchOptions, 'interval'> & { disabled?: boolean }
}

function openApiTypescriptCodegen(options: PluginOptions): Plugin {
  const watcher = chokidar.watch(options.input, {
    ignoreInitial: true,
    interval: options.watch?.interval ?? 1000,
  })
  const openApiOptions: Options = {
    output: options.output ?? 'openapi',
    ...options,
  }
  return {
    name: 'vite-plugin-openapi-typescript-codegen',
    enforce: 'pre',
    buildStart: async () => {
      const OpenAPI = await import('openapi-typescript-codegen')
      OpenAPI.generate(openApiOptions)
      if (!options.watch?.disabled) {
        // eslint-disable-next-line no-console
        console.log('Watching for changes...')
        watcher.on('change', () => {
          // eslint-disable-next-line no-console
          console.log('Change detected, regenerating...')
          OpenAPI.generate(openApiOptions)
          // eslint-disable-next-line no-console
          console.log('Done!')
        })
      }
    },
    buildEnd: () => {
      watcher.close()
    },
  }
}

export default openApiTypescriptCodegen
