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