import {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
  json,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createEmotionCache,
} from "@mantine/core"
import { StylesPlaceholder } from "@mantine/remix"
import { theme } from "~/theme/theme"
import { useColorScheme, useLocalStorage } from "@mantine/hooks"
import FooterLayout, {
  links as FooterLinks,
} from "./components/molecules/footer"
import styles from "~/styles/rootStyles.css"
import HeaderMenu, { links as HeaderLinks } from "./components/molecules/header"
import { CartContextProvider } from "./context/cart"
import { GetProductsQuery } from "./models/directus/sdk"
import { initDirectusCms } from "./models/directus/directus.server"
import { cache } from "./utils/db.server"
import { useMemo } from "react"

enum keys {
  "charset",
  "title",
  "viewport",
}

export const links: LinksFunction = () => {
  return [
    // {
    //   rel: "icon",
    //   href: "/crown.svg",
    //   type: "image/svg+xml",
    // },
    // {
    //   rel: "apple-touch-icon",
    //   sizes: "180x180",
    //   href: "/crown.svg",
    //   type: "image/svg+xml",
    // },
    // {
    //   rel: "mask-icon",
    //   href: "/crown.svg",
    //   type: "image/svg+xml",
    //   color: "#ffcd00",
    // },
    ...HeaderLinks(),
    ...FooterLinks(),
    { rel: "stylesheet", href: styles },
  ]
}

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Pixel Perfect Art Shop" },
    {
      description:
        "High quality AI art for your home or office.  Enjoy inexpensive art that can be printed or framed to fit your personal tastes.",
    },
    { viewport: "width=device-width,initial-scale=1" },
  ]
}

createEmotionCache({ key: "mantine" })

const navLinks = [
  {
    link: "/products",
    label: "Products",
  },
  {
    link: "/categories",
    label: "Categories",
  },
  { link: "/contact", label: "Contact Us" },
]

type LoaderData = {
  products: GetProductsQuery
}

const productDefault = { products: [] }

export const loader: LoaderFunction = async ({ request }) => {
  let products: GetProductsQuery
  const directus = initDirectusCms()

  if (cache.has("all-products-data")) {
    products = (await cache.get("all-products-data")) ?? productDefault
  } else {
    products =
      (await directus.getProducts({
        filter: {
          status: { _eq: "published" },
        },
        language: "en-US",
      })) ?? productDefault
    if (products !== undefined) {
      cache.set("all-products-data", products, 60 * 5) // set cache for 1 minute
    }
  }

  return json<LoaderData>({
    products,
  })
}

export default function App() {
  const { products } = useLoaderData<LoaderData>()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  })
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  const memoProductsData = useMemo(() => {
    if (products) {
      const memoProducts = products
      return memoProducts
    }
    return productDefault
  }, [products])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, ...theme }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <CartContextProvider>
          <html lang="en">
            <head>
              <StylesPlaceholder />
              <Meta />
              <Links />
            </head>
            <body className={colorScheme}>
              <HeaderMenu
                links={navLinks}
                button={false}
                allProducts={memoProductsData}
              />
              <main>
                <Outlet />
              </main>
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
              <FooterLayout />
            </body>
          </html>
        </CartContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
