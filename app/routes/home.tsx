import { json, LinksFunction, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useMemo } from "react"
import { initDirectusCms } from "~/models/directus/directus.server"
import { GetPagesQuery } from "~/models/directus/sdk"
// import { groupBy } from "~/utils/utils"
// import FaqsView, { links as FaqsViewLinks } from "~/views/faqs/faqsView"

export const links: LinksFunction = () => {
  return [
    /*...HomeViewLinks()*/
  ]
}

type LoaderData = {
  pages: GetPagesQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  console.log("inside loader")
  const directus = initDirectusCms()
  console.log(directus)
  const pageData = await directus.getPages({
    filter: { status: { _eq: "Published" } },
    sort: ["id"],
  })

  console.log(pageData)

  return json<LoaderData>({
    pages: pageData,
  })
}

export default function Home() {
  const data = useLoaderData<LoaderData>()
  console.log("loader data", data)

  // const pageData = useMemo(() => {
  //   return pages
  // }, [pages])

  return <div>{"Home Page"}</div>
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
