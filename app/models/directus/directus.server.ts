import { GraphQLClient } from 'graphql-request'
import { getSdk as getSdkGen } from '~/models/directus/sdk'
import { getRequiredServerEnvVar } from '~/utils/environment'

function initDirectusCms() {
  const client = new GraphQLClient(
    getRequiredServerEnvVar('DIRECTUS_CMS_API_URL'),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getRequiredServerEnvVar(
          'DIRECTUS_API_TOKEN'
        )}`,
      },
    }
  )

  return getSdkGen(client)
}

export { initDirectusCms }
