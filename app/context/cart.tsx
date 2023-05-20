import { useBeforeUnload } from '@remix-run/react'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { findIndex } from '~/utils/utils'

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
      'Cart must have a provider enabled to use.  Please add the provider higher in the tree.'
    )
  }

  return context
}

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useBeforeUnload(
    React.useCallback(() => {
      if (cart.length !== 0) {
        localStorage?.setItem('cart', JSON.stringify(cart))
      }
    }, [cart])
  )

  useEffect(() => {
    if (cart.length === 0 && localStorage?.getItem('cart')) {
      let storedCart = JSON.parse(localStorage?.getItem('cart')!)
      setCart(storedCart)
    }
  }, [])

  const addToCart = (id: string, quantity: number) => {
    const existingItemIndex = cart.findIndex((item) => item.id === id)
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += quantity
      localStorage?.setItem('cart', JSON.stringify(updatedCart))
      setCart(updatedCart)
    } else {
      const newCart = [...cart, { id, quantity }]
      localStorage?.setItem('cart', JSON.stringify(newCart))
      setCart(newCart)
    }
  }

  const removeFromCart = (id: string) => {
    const cartIndex = findIndex(cart, id)
    let updatedCart = [...cart]
    if (cart[cartIndex].quantity < 2) {
      updatedCart.splice(cartIndex, 1)
    } else {
      updatedCart.map((item) => {
        if (item.id === id) item.quantity = item.quantity - 1
        return item
      })
    }
    localStorage?.setItem('cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const cartValue = useMemo(() => {
    return {
      cart,
    }
  }, [cart])

  return (
    <CartContext.Provider value={{ ...cartValue, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
