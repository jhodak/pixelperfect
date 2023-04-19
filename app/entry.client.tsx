import { RemixBrowser } from "@remix-run/react"
import { hydrate } from "react-dom"
import { ClientProvider } from "@mantine/remix"
import { CartContextProvider } from "./context/cart"

hydrate(
  <CartContextProvider>
    <ClientProvider>
      <RemixBrowser />
    </ClientProvider>
  </CartContextProvider>,
  document
)
