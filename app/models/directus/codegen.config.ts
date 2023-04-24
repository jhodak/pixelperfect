import { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const endpointOverride = process.env.DIRECTUS_CMS_API_URL
const productionEndpoint = 'http://192.168.0.9:8055/graphql'
export const endpoint = `${endpointOverride || productionEndpoint}`
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_API_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    'app/models/directus/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'app/models/directus/generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'app/models/directus/sdk.ts': {
      documents: ['app/models/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        withHooks: true,
      },
    },
  },
}

export default config
