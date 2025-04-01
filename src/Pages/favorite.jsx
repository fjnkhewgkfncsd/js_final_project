"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavoritesContext, CartContext } from "../Data/CartContext"
import { Heart, ShoppingCart } from "lucide-react"
import "../Styles/favorite.css"

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (product) => {
    // If the product has sizes but none selected, use the first size
    const productToAdd = {
      ...product,
      selectedSize: product.selectedSize || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : ""),
      quantity: 1,
    }
    addToCart(productToAdd)
  }

  return (
    <div className="container-fav">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          KhmerKits
        </Link>
        <p>/</p>
        <p>Favorites</p>
      </div>

      <h1 className="page-title">My Favorites</h1>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <p>You haven't saved any products yet</p>
          <Link to="/shop" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="favorites-grid three-columns">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <div className="favorite-image-container">
                <Link to={`/product/${product.id}`}>
                  <img src={product.src || "/placeholder.svg"} alt={product.title} className="favorite-image" />
                </Link>
                <button
                    onClick={() => toggleFavorite(product)}
                    className="remove-favorite-btn"
                    aria-label="Remove from favorites"
                    >
                    <span className="heart-icon filled" title="Remove from favorites">❤️</span>
                </button>
              </div>
              <div className="favorite-details">
                <Link to={`/product/${product.id}`} className="favorite-title">
                  {product.title}
                </Link>
                <p className="favorite-price">${product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                  <ShoppingCart className="cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites

