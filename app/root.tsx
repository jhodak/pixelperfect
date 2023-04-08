import type { V2_MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { MantineProvider, createEmotionCache } from "@mantine/core"
import { StylesPlaceholder } from "@mantine/remix"
import { theme } from "~/theme/theme"

enum keys {
  "charset",
  "title",
  "viewport",
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

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  )
}
