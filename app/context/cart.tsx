import { useFetcher } from "@remix-run/react"
import React, {
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { findIndex } from "~/utils/utils"

export interface CartItem {
  quantity: number
  id: string
}

export interface Cart {
  cart: CartItem[]
  addToCart: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
}

export const defaultCart = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
}

const CartContext = React.createContext<Cart>(defaultCart)

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      "Cart must have a provider enabled to use.  Please add the provider higher in the tree."
    )
  }

  return context
}

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (id: string, quantity: number) => {
    const existingItemIndex = cart.findIndex((item) => item.id === id)
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += quantity
      setCart(updatedCart)
    } else {
      setCart([...cart, { id, quantity }])
    }
  }

  const removeFromCart = (id: string) => {
    const cartIndex = findIndex(cart, id)
    if (cart[cartIndex].quantity < 2) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          return item
        }
      })
      setCart(updatedCart)
    }
  }

  const cartValue = useMemo(() => {
    return {
      cart,
      addToCart,
      removeFromCart,
    }
  }, [cart])

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
