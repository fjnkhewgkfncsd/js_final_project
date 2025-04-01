"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import List from "../Data/jersey_shop"
import "../Styles/ProductDetail.css"
import { useContext } from "react"
import { CartContext, FavoritesContext } from "../Data/CartContext"
import Cardforall from "./Cardforall"

const ProductDetail = () => {
  const { id } = useParams()
  const product = List.find((item) => item.id === Number.parseInt(id))
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useContext(CartContext)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  // Check if product is in favorites
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  // Sync isFavorite state with favorites context
  useEffect(() => {
    if (product && favorites) {
      const isInFavorites = favorites.some((item) => item.id === product.id)
      setIsFavorite(isInFavorites)
    }
  }, [favorites, product])

  // For demo purposes, let's create some additional images
  const productImages = [product?.src || "/placeholder.svg"]

  if (!product) {
    return <div className="not-found">Product not found</div>
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    setAddedToCart(true)
    addToCart({ ...product, selectedSize, quantity })
    console.log("Added to cart", product, selectedSize, quantity)
  }

  const handleToggleFavorite = () => {
    // Pass the product directly, not wrapped in an object
    toggleFavorite(product)
    console.log(isFavorite ? "Removed from favorites" : "Added to favorites", product)
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image-container">
            <img
              src={productImages[activeImage] || "/placeholder.svg"}
              alt={product.alt || product.title}
              className="main-image"
            />
            <button
              className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
              onClick={handleToggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? <span className="heart-icon filled">❤️</span> : <span className="heart-icon">♡</span>}
            </button>
          </div>

          <div className="thumbnail-gallery">
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img || "/placeholder.svg"} alt={`Product view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price">${product.price}</div>
          </div>

          <div className="product-description">
            <p>
              {product.Description ||
                "This premium jersey features breathable fabric, moisture-wicking technology, and a comfortable fit. Perfect for game day or casual wear."}
            </p>
          </div>

          <div className="product-options">
            <div className="size-selection">
              <div className="option-label">
                <h3>Size</h3>
                {!selectedSize && <span className="required">* Required</span>}
              </div>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-selection">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className={`add-to-cart-button ${addedToCart ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={addedToCart}
            >
              {addedToCart ? (
                <>
                  <span className="icon">✓</span>
                  Added to Cart
                </>
              ) : (
                <>
                  <span className="icon">🛒</span>
                  Add to Cart
                </>
              )}
            </button>

            <button className={`wishlist-button ${isFavorite ? "in-wishlist" : ""}`} onClick={handleToggleFavorite}>
              {isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="product-details">
            <div className="details-section">
              <h3>Product Details</h3>
              <ul className="details-list">
                <li>Premium quality fabric</li>
                <li>Official licensed product</li>
                <li>Machine washable</li>
                <li>100% authentic guarantee</li>
              </ul>
            </div>

            <div className="details-section">
              <h3>Shipping Information</h3>
              <p>Free shipping on orders over $50. Estimated delivery: 3-5 business days.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-products-grid">
          {/* CHANGE START: Wrapped Cardforall in a div with onClick to scroll to top */}
          {List.filter((item) => item.id !== Number.parseInt(id))
            .slice(0, 4)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                onClick={() => {
                  // Scroll to top before navigating
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }}
              >
                <Cardforall Products={relatedProduct} />
              </div>
            ))}
          {/* CHANGE END */}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

