import { ClientProvider } from '@mantine/remix'
import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import { CartContextProvider } from './context/cart'

hydrate(
  <ClientProvider>
    <CartContextProvider>
      <RemixBrowser />
    </CartContextProvider>
  </ClientProvider>,
  document
)
