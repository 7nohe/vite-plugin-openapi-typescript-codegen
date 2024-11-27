import { Plugin } from 'vite';
import { WatchOptions } from 'chokidar';
import { Options } from 'openapi-typescript-codegen';

interface PluginOptions extends Omit<Options, "output"> {
    input: string;
    output?: string;
    watch?: Pick<WatchOptions, "interval"> & {
        disabled?: boolean;
    };
}
declare function vitePluginOpenapiTypescriptCodegen(options: PluginOptions): Plugin;

export { vitePluginOpenapiTypescriptCodegen as default };
