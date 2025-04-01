"use client"

import { CartContext, FavoritesContext } from "../Data/CartContext"
import { useState, useEffect } from "react"

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Initialize favorites from localStorage or empty array
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize,
      )

      if (existingProductIndex !== -1) {
        // If product exists, update quantity
        const updatedCart = [...prevCart]
        updatedCart[existingProductIndex].quantity += product.quantity
        return updatedCart
      } else {
        // If product doesn't exist, add it to cart
        return [...prevCart, product]
      }
    })
  }

  // Update cart item quantity
  const updateCartItem = (index, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart]
      updatedCart[index].quantity = newQuantity
      return updatedCart
    })
  }

  // Remove item from cart
  const removeCartItem = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart]
      updatedCart.splice(index, 1)
      return updatedCart
    })
  }

  // Toggle product in favorites
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      // Check if product already exists in favorites
      const existingProductIndex = prevFavorites.findIndex((item) => item.id === product.id)

      if (existingProductIndex !== -1) {
        // If product exists, remove it
        const updatedFavorites = [...prevFavorites]
        updatedFavorites.splice(existingProductIndex, 1)
        return updatedFavorites
      } else {
        // If product doesn't exist, add it
        return [...prevFavorites, product]
      }
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoritesContext.Provider>
    </CartContext.Provider>
  )
}

