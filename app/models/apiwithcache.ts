import { initDirectusCms } from './directus/directus.server'
import { cache } from '~/utils/db.server'

const directus = initDirectusCms()
export async function getCmsData(
  name: string,
  limit?: number,
  language?: 'en-US' | 'es-US'
) {
  let data
  if (cache.has(name)) {
    data = await cache.get('latest-products-data-homepage')
  } else {
    data = await directus.getLatestProducts({
      filter: {
        status: { _eq: 'published' },
      },
      limit: 12,
      sort: ['-date_created'],
      language: 'en-US',
    })
    if (data !== undefined) {
      cache.set(name, data, 60 * 1) // set cache for 1 minute
    }
  }
}
