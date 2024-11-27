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
declare function openApiTypescriptCodegen(options: PluginOptions): Plugin;

export { openApiTypescriptCodegen as default };
