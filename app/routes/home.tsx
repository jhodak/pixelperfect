import { json, LinksFunction, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useMemo } from "react"
import { initDirectusCms } from "~/models/directus/directus.server"
import { GetPagesQuery } from "~/models/directus/sdk"

export const links: LinksFunction = () => {
  return [
    /*...HomeViewLinks()*/
  ]
}

type LoaderData = {
  pageData: GetPagesQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const directus = initDirectusCms()
  const pageData = await directus.getPages({
    filter: {
      status: { _eq: "published" },
      translations: { name: { _eq: "page 1" } },
    },
    sort: ["id"],
    language: "en-US",
  })
  console.log(pageData)
  return json<LoaderData>({
    pageData: pageData,
  })
}

export default function Home() {
  const data = useLoaderData<LoaderData>()
  // const { price, translations, status } = data?.pageData?.pages[0]

  const pageData = useMemo(() => {
    if (data?.pageData?.pages[0]) {
      const memoData = data.pageData.pages[0]
      return memoData
    }
    return null
  }, [data])

  return <div>{"Here is the Home Page"}</div>
  // return <HomeView cmsData={pageData} />
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
