import React from 'react'
import { CartContextProvider, useCart } from './cart'
import { act, renderHook } from 'test/helpers'
import '@testing-library/jest-dom/extend-expect'

describe('CartContext', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('should add item to cart', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item = {
      id: 'item1',
      quantity: 1,
    }

    expect(result.current.cart.length).toBe(0)
    expect(result.current.cart).toEqual([])

    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })

    expect(result.current.cart.length).toBe(1)
    expect(result.current.cart[0]).toEqual(item)
  })

  it('added items appear in localstorage correctly', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })
    const item = {
      id: 'item1',
      quantity: 1,
    }
    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })

    expect(window.localStorage.getItem('cart')).toEqual(JSON.stringify([item]))
  })

  it('adding item a second time should increase quantity', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item = {
      id: 'item1',
      quantity: 1,
    }

    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })
    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })

    expect(result.current.cart.length).toBe(1)
    expect(result.current.cart[0].quantity).toEqual(2)
  })

  it('adding item a second time also updated localstorage', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })
    const item = {
      id: 'item1',
      quantity: 1,
    }

    const itemAddedTwice = {
      id: 'item1',
      quantity: 2,
    }
    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })
    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })

    expect(window.localStorage.getItem('cart')).toEqual(
      JSON.stringify([itemAddedTwice])
    )
  })

  it('should be able to add multiple items to cart', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item1 = {
      id: 'item1',
      quantity: 1,
    }
    const item2 = {
      id: 'item2',
      quantity: 2,
    }

    expect(result.current.cart.length).toBe(0)
    expect(result.current.cart).toEqual([])

    act(() => {
      result.current.addToCart(item1.id, item1.quantity)
    })

    act(() => {
      result.current.addToCart(item2.id, item2.quantity)
    })

    expect(result.current.cart.length).toBe(2)
    expect(result.current.cart[0]).toEqual(item1)
    expect(result.current.cart[1]).toEqual(item2)
  })

  it('should remove item from cart', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item = {
      id: 'item1',
      quantity: 2,
    }

    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })
    expect(result.current.cart.length).toBe(1)
    expect(result.current.cart[0].quantity).toBe(2)

    act(() => {
      result.current.removeFromCart(item.id)
    })
    // we put 2 items in cart, so we expect when we remove 1 for it to be 1
    expect(result.current.cart.length).toBe(1)

    act(() => {
      result.current.removeFromCart(item.id)
    })
    // remove last item from cart
    expect(result.current.cart.length).toBe(0)
  })

  it('should be able to remove a specific item from cart', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item1 = {
      id: 'item1',
      quantity: 1,
    }
    const item2 = {
      id: 'item2',
      quantity: 2,
    }
    const item2OnceRemove = {
      id: 'item2',
      quantity: 1,
    }

    expect(result.current.cart.length).toBe(0)
    expect(result.current.cart).toEqual([])

    act(() => {
      result.current.addToCart(item1.id, item1.quantity)
    })
    act(() => {
      result.current.addToCart(item2.id, item2.quantity)
    })

    expect(result.current.cart.length).toBe(2)
    expect(result.current.cart[0]).toEqual(item1)
    expect(result.current.cart[1]).toEqual(item2)

    act(() => {
      result.current.removeFromCart(item2.id)
    })
    expect(result.current.cart.length).toBe(2)
    expect(result.current.cart[0]).toEqual(item1)
    expect(result.current.cart[1]).toEqual(item2OnceRemove)
    act(() => {
      result.current.removeFromCart(item2.id)
    })
    expect(result.current.cart.length).toBe(1)
    expect(result.current.cart[0]).toEqual(item1)
  })

  it('fully testing localstorage add to cart then remove', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartContextProvider>{children}</CartContextProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper: Wrapper })

    const item = {
      id: 'item1',
      quantity: 2,
    }
    const itemAfterRemoveFromCart = { id: 'item1', quantity: 1 }

    // add item with quantity 2 to cart
    act(() => {
      result.current.addToCart(item.id, item.quantity)
    })
    expect(window.localStorage.getItem('cart')).toEqual(JSON.stringify([item]))

    // remove one from the quantity
    act(() => {
      result.current.removeFromCart(item.id)
    })
    expect(window.localStorage.getItem('cart')).toEqual(
      JSON.stringify([itemAfterRemoveFromCart])
    )

    act(() => {
      result.current.removeFromCart(item.id)
    })
    // remove last item from cart
    expect(window.localStorage.getItem('cart')).toEqual(JSON.stringify([]))
  })
})
