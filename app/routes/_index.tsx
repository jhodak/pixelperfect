import { json, LoaderFunction, V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { initDirectusCms } from "~/models/directus/directus.server"
import { GetPagesQuery } from "~/models/directus/sdk"
import Home from "./home"

export const meta: V2_MetaFunction = () => {
  return [{ title: "_index page" }]
}

type LoaderData = {
  pages: GetPagesQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  console.log("inside loader")
  const directus = initDirectusCms()
  console.log("directus", directus)
  const pageData = await directus.getPages({
    filter: { status: { _eq: "published" } },
    sort: ["id"],
    language: "en-us",
  })

  console.log(pageData)

  return json<LoaderData>({
    pages: pageData,
  })
}

export default function Index() {
  const data = useLoaderData<LoaderData>()
  console.log("loader data", data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Home />
    </div>
  )
}
