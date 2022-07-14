import { Plugin } from "vite";
import chokidar from "chokidar";

interface PluginOptions {
  input: string;
  output: string;
}

function vitePluginOpenapiTypescriptCodegen(options: PluginOptions): Plugin {
  const watcher = chokidar.watch(options.input, {
    ignoreInitial: true,
  });
  return {
    name: "vite-plugin-openapi-typescript-codegen",
    enforce: "pre",
    buildStart: async () => {
      const OpenAPI = await import("openapi-typescript-codegen");
      OpenAPI.generate(options);
      console.log("Watching for changes...");
      watcher.on("change", () => {
        console.log("Change detected, regenerating...");
        OpenAPI.generate(options);
        console.log("Done!");
      });
    },
    buildEnd: () => {
      watcher.close();
    }
  };
}

export default vitePluginOpenapiTypescriptCodegen;
