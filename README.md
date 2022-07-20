# vite-plugin-openapi-typescript-codegen

[OpenAPI Typescript Codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) for Vite


## Install

```bash
npm install -D @7nohe/vite-plugin-openapi-typescript-codegen
```

## Usage

Add to your `vite.config.ts`

```ts
import { defineConfig } from "vite";
import openApiTypescriptCodegen from "@7nohe/vite-plugin-openapi-typescript-codegen";

export default defineConfig({
  plugins: [
    openApiTypescriptCodegen({
      input: './petstore.yaml',
      output: './openapi',
      watch: {
        interval: 500,
        disabled: process.env.NODE_ENV === 'production',
      }
    })
  ],
});
```

`petstore.yaml` is the schema file based on OpenAPI specification.

This plugin generates TypeScript clients by running `vite`/`vite build`.

It also detects changes in the schema file and regenerates the client files.


## Options

| name            | type              | describe                                    |
| --------------- | ----------------- | ------------------------------------------- |
| input           | string            | OpenAPI specification file (required)       |
| output          | string            | Output directory (default: `openapi`)       |
| watch.interval  | number            | Interval of file watching (default: `1000`) |
| watch.disabled  | boolean           | Disable file watching (default: `false`)    |

[OpenAPI Typescript Codegen options](https://github.com/ferdikoomen/openapi-typescript-codegen#usage) are also available.

## License

MIT
