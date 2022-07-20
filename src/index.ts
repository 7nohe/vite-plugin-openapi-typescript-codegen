import { Plugin } from "vite";
import chokidar, { WatchOptions } from "chokidar";
import { Options } from "openapi-typescript-codegen";

interface PluginOptions extends Options {
  input: string;
  output: string;
  watch?: Pick<WatchOptions, 'interval'> & { disabled?: boolean };
}

function vitePluginOpenapiTypescriptCodegen(options: PluginOptions): Plugin {
  const watcher = chokidar.watch(options.input, {
    ignoreInitial: true,
    interval: options.watch?.interval ?? 1000,
  });
  return {
    name: "vite-plugin-openapi-typescript-codegen",
    enforce: "pre",
    buildStart: async () => {
      const OpenAPI = await import("openapi-typescript-codegen");
      OpenAPI.generate(options);
      if (!options.watch?.disabled) {
        console.log("Watching for changes...");
        watcher.on("change", () => {
          console.log("Change detected, regenerating...");
          OpenAPI.generate(options);
          console.log("Done!");
        });
      }
    },
    buildEnd: () => {
      watcher.close();
    }
  };
}

export default vitePluginOpenapiTypescriptCodegen;
