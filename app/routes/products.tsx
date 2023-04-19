import { Container } from "@mantine/core"
import { json, LinksFunction, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useMemo, useState } from "react"
import ProductGrid, {
  links as ProductGridLinks,
} from "~/components/molecules/productgrid"
import { initDirectusCms } from "~/models/directus/directus.server"
import { GetPagesQuery, GetProductsQuery } from "~/models/directus/sdk"
import { cache } from "~/utils/db.server"

export const links: LinksFunction = () => {
  return [...ProductGridLinks()]
}

type LoaderData = {
  pageInfo: GetPagesQuery
  products: GetProductsQuery
}

const productDefault = { products: [] }

export const loader: LoaderFunction = async ({ request }) => {
  let productsData: GetProductsQuery
  const directus = initDirectusCms()
  const pageData = await directus.getPages({
    filter: {
      status: { _eq: "published" },
      translations: { name: { _eq: "page 1" } },
    },
    sort: ["id"],
    language: "en-US",
  })

  if (cache.has("products-data")) {
    productsData = (await cache.get("products-data")) ?? productDefault
  } else {
    productsData =
      (await directus.getProducts({
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-date_created"],
        language: "en-US",
      })) ?? productDefault
    if (productsData !== undefined) {
      cache.set("products-data", productsData, 60 * 1) // set cache for 1 minute
    }
  }
  return json<LoaderData>({
    pageInfo: pageData,
    products: productsData,
  })
}

export default function Products() {
  const { products, pageInfo } = useLoaderData<LoaderData>()

  const pageData = useMemo(() => {
    if (pageInfo?.pages[0]) {
      const memoData = pageInfo.pages[0]
      return memoData
    }
    return null
  }, [pageInfo])

  const memoProductsData = useMemo(() => {
    if (products) {
      const memoProducts = products
      return memoProducts
    }
    return null
  }, [products])

  return (
    <div>
      <Container size={1280}>
        {memoProductsData?.products && (
          <ProductGrid
            productsData={memoProductsData}
            title="Digital Art Products"
          />
        )}
      </Container>
    </div>
  )
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error-container">
      <dialog color="red" title="Index Error">
        {error.message}
      </dialog>
    </div>
  )
}
