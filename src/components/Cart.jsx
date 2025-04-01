"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../Styles/Display-cart.css"

const CartDisplay = ({ product,selectedsize, updateQuantity, removeItem}) => {
  const [quantity, setQuantity] = useState(product.quantity)
  const [minus, setMinus] = useState(product.quantity <= 1)

  // Keep local state in sync with prop changes
  useEffect(() => {
    setQuantity(product.quantity)
    setMinus(product.quantity <= 1)
  }, [product.quantity])

  console.log(product)
  const handleMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      updateQuantity(newQuantity)
      setMinus(newQuantity <= 1)
    }
  }
  const handlePlus = () => {
    console.log(total())
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateQuantity(newQuantity)
    setMinus(false)
  }
  const total = () => {
    return (Number(product.price) * Number(quantity)).toFixed(2);
  };
   
  return (
    <div className="Container-display-cart">
      <Link to={`/product/${product.id}`}>
        <img src={product.src || "/placeholder.svg"} alt={product.alt || product.title} />
      </Link>
      <div className="section-cart">
        <p>{product.title}</p>
        {selectedsize && <p>{selectedsize}</p>}
        <p>${product.price}</p>
        {product.Description && <p>{product.Description}</p>}
        <div>
          <div className="quantity-controls">
            <button disabled={minus} onClick={handleMinus}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={handlePlus}>+</button>
          </div>
          <p>Total: ${total()}</p>
          <button onClick={removeItem} className="remove-btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartDisplay

