import { Container, Title, useMantineColorScheme } from "@mantine/core"
import { json, LoaderFunction, V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useContext, useMemo } from "react"
import { initDirectusCms } from "~/models/directus/directus.server"
import {
  GetPagesQuery,
  GetLatestProductsQuery,
  GetProductsQuery,
} from "~/models/directus/sdk"
import { cache } from "~/utils/db.server"
import styles from "~/styles/indexStyles.css"

import ProductSlider, {
  links as sliderLinks,
} from "~/components/molecules/productslider"
import { useMediaQuery } from "@mantine/hooks"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pixel Perfect Art Shop" }]
}

export const links = () => {
  return [...sliderLinks(), { rel: "stylesheet", href: styles }]
}

type LoaderData = {
  pageData: GetPagesQuery
  latestProducts: GetLatestProductsQuery
  flowers: GetProductsQuery
}

const productDefault = { products: [] }
const pageDefault = { pages: [] }

export const loader: LoaderFunction = async ({ request }) => {
  let pageData: GetPagesQuery
  let latestProductsData: GetLatestProductsQuery
  let flowers: GetProductsQuery
  const directus = initDirectusCms()
  if (cache.has("page-data-homepage")) {
    pageData = (await cache.get("page-data-homepage")) ?? pageDefault
  } else {
    pageData =
      (await directus.getPages({
        filter: {
          status: { _eq: "published" },
          translations: { name: { _eq: "Home" } },
        },
        sort: ["id"],
        language: "en-US",
      })) ?? pageDefault
    cache.set("page-data-homepage", pageData, 60 * 1) // set cache for 1 minute
  }

  if (cache.has("latest-products-data-homepage")) {
    latestProductsData =
      (await cache.get("latest-products-data-homepage")) ?? productDefault
  } else {
    latestProductsData =
      (await directus.getLatestProducts({
        filter: {
          status: { _eq: "published" },
        },
        limit: 12,
        sort: ["-date_created"],
        language: "en-US",
      })) ?? productDefault
    if (latestProductsData !== undefined) {
      cache.set("latest-products-data-homepage", latestProductsData, 60 * 1) // set cache for 1 minute
    }
  }

  if (cache.has("flowers-products-data")) {
    flowers = (await cache.get("flowers-products-data")) ?? productDefault
  } else {
    flowers =
      (await directus.getProducts({
        filter: {
          status: { _eq: "published" },
          categories: {
            categories_id: {
              category: {
                _contains: "flowers",
              },
            },
          },
        },
        limit: 8,
        sort: ["-date_created"],
        language: "en-US",
      })) ?? productDefault
    if (flowers !== undefined) {
      cache.set("flowers-products-data", flowers, 60 * 1) // set cache for 1 minute
    }
  }

  return json<LoaderData>({
    pageData: pageData,
    latestProducts: latestProductsData,
    flowers: flowers,
  })
}

export default function Index() {
  const { pageData, latestProducts, flowers } = useLoaderData<LoaderData>()

  const isTablet = useMediaQuery("(max-width: 769px)", false, {
    getInitialValueInEffect: false,
  })
  const memoPageData = useMemo(() => {
    if (pageData?.pages![0]) {
      const pageinfo = pageData.pages[0]
      return pageinfo
    }
    return null
  }, [pageData])

  const memoLatestProductsData = useMemo(() => {
    if (latestProducts) {
      const memoProducts = latestProducts
      return memoProducts
    }
  }, [latestProducts])

  const memoFlowersData = useMemo(() => {
    if (flowers) {
      const memoFlowers = flowers
      return memoFlowers
    }
  }, [flowers])

  return (
    <>
      <div
        className={"index-banner"}
        style={{
          marginTop: isTablet ? "-2rem" : "-6rem",
        }}
      >
        <Title
          className="tangerine"
          order={1}
          align="center"
          pt={"24px"}
          size={48}
          opacity={1}
          color={"var(--mantine-color-white)"}
        >
          Pixel Perfect Art Shop
        </Title>
      </div>

      <Container size={1280}>
        {memoLatestProductsData?.products && (
          <ProductSlider productsData={memoLatestProductsData} title="Latest" />
        )}
        {memoFlowersData?.products && (
          <ProductSlider productsData={memoFlowersData} title="Flowers" />
        )}
      </Container>
    </>
  )
}
