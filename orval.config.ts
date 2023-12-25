import { defineConfig } from 'orval'

export default defineConfig({
  petstore: {
    input: 'api.yaml',
    output: {
      target: 'api/index.ts',
      override: {
        mutator: {
          path: 'api/mutator.ts',
          name: 'customInstance'
        }
      }
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  }
})
