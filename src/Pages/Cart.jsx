"use client"

import { useContext } from "react"
import { CartContext } from "../Data/CartContext"
import CartDisplay from "../components/Cart"
import { Link } from "react-router-dom"
import "../Styles/Cart.css"

const Cart = () => {
  const { cart, updateCartItem, removeCartItem } = useContext(CartContext)
  // console.log(cart[0].selectedSize)
  // Calculate total price of all items in cart
  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.price) * item.quantity
  }, 0)

  return (
    <div className="container-cart">
      <div className="breadcrumb">
        <Link to="/">KhmerKits</Link>
        <p>/</p>
        <p>Shopping Cart</p>
      </div>

      <h1 className="page-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product,index) => (
              <CartDisplay
              key={`${product.id}-${product.selectedSize || "default"}-${index}`}
                product={product}
                selectedsize={product.selectedSize}
                updateQuantity={(newQuantity) => updateCartItem(index, newQuantity)}
                removeItem={() => removeCartItem(index)}
                index={index}
              />
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

