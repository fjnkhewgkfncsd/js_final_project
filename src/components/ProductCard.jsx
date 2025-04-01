import React from 'react';
import styles from '../Styles/ProductCard.module.css';

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  sizes, 
  description 
}) => {
  return (
    <div className={styles.productCard}>
      {/* Product Title */}
      <h2 className={styles.productTitle}>{title}</h2>
      
      {/* Price Section */}
      <div className={styles.priceSection}>
        <span className={styles.currentPrice}>${price}</span>
        {originalPrice && (
          <span className={styles.originalPrice}>${originalPrice}</span>
        )}
      </div>
      
      {/* Size Selection */}
      <div className={styles.sizeSelection}>
        {sizes.map((size) => (
          <button 
            key={size} 
            className={styles.sizeButton}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
      
      {/* Divider */}
      <hr className={styles.divider} />
      
      {/* Add to Cart Button */}
      <button className={styles.addToCartButton}>
        ADD TO CART
      </button>
      
      {/* Divider */}
      <hr className={styles.divider} />
      
      {/* Product Details */}
      <div className={styles.productDetails}>
        <h3 className={styles.detailsTitle}>Details:</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

// Default props
ProductCard.defaultProps = {
  sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
  description: 'Ankle men put old men chea sabb and paving to lent his pack in big hands did just tiny.'
};

export default ProductCard;