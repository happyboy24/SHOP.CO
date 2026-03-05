import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, renderStars }) => {
  const { id, title, price, rating, thumbnail, images } = product;
  
  
  const imageSrc = thumbnail || images?.[0] || 'https://via.placeholder.com/300';

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={imageSrc}
          alt={title}
          className="product-card__image"
          loading="lazy"
        />
        <button className="product-card__wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{title}</h3>
        {renderStars && rating && renderStars(rating)}
        <div className="product-card__pricing">
          <span className="product-card__price">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
