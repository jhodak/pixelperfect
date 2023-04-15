import type { LinksFunction, V2_MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  })

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

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
        <html lang="en">
          <head>
            <StylesPlaceholder />
            <Meta />
            <Links />
          </head>
          <body className={colorScheme}>
            <HeaderMenu links={navLinks} button={false} />
            <main>
              <Outlet />
            </main>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <FooterLayout />
          </body>
        </html>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
