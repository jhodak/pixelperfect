import { ClientProvider } from "@mantine/remix"
import { RemixBrowser } from "@remix-run/react"
import { hydrate } from "react-dom"
import { CartContextProvider } from "./context/cart"

hydrate(
  <CartContextProvider>
    <ClientProvider>
      <RemixBrowser />
    </ClientProvider>
  </CartContextProvider>,
  document
)
