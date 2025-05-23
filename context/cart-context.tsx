"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem } from "@/lib/types"
import { getBookById } from "@/lib/data"

interface CartContextType {
  items: CartItem[]
  addToCart: (bookId: string, quantity?: number) => void
  removeFromCart: (bookId: string) => void
  updateQuantity: (bookId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("booksly-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("booksly-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (bookId: string, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.bookId === bookId)

      if (existingItem) {
        return prevItems.map((item) =>
          item.bookId === bookId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        return [...prevItems, { bookId, quantity }]
      }
    })
  }

  const removeFromCart = (bookId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.bookId !== bookId))
  }

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bookId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.bookId === bookId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  // Calculate total number of items in cart
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    const book = getBookById(item.bookId)
    return total + (book?.price || 0) * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
