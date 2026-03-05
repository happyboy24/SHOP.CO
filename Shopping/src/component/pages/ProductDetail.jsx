import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        
        const products = window.shopProducts || [];
        const api = window.shopApi;
        
        if (products.length > 0) {
          const foundProduct = products.find(p => p.id === parseInt(id));
          if (foundProduct) {
            setProduct({
              ...foundProduct,
              title: foundProduct.title || foundProduct.name,
              thumbnail: foundProduct.thumbnail || foundProduct.image
            });
            setLoading(false);
            return;
          }
        }
        
        
        if (api) {
          const response = await fetch(api.detailUrl(id));
          if (!response.ok) throw new Error('Failed to fetch product');
          const data = await response.json();
          setProduct({
            ...data,
            title: data.title || data.name,
            thumbnail: data.thumbnail || data.image
          });
        } else {
        
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          if (!response.ok) throw new Error('Failed to fetch product');
          const data = await response.json();
          setProduct(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <p>Product not found</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/landingpage">Shop</Link>
        <span>/</span>
        <span className="current">{product.title}</span>
      </div>

      
      <div className="product-detail-grid">
      
        <div className="product-image-section">
          <div className="main-image">
            <img 
              src={product.thumbnail || product.image || 'https://via.placeholder.com/600'} 
              alt={product.title} 
            />
          </div>
          <div className="image-gallery">
            {product.images && product.images.slice(0, 4).map((img, index) => (
              <div key={index} className="gallery-image">
                <img src={img} alt={`${product.title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

             <div className="product-info-section">
          <span className="product-category">{product.category}</span>
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-rating">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span className="rating-count">({product.reviews?.length || 0} reviews)</span>
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.discountPercentage && (
              <span className="discount">-{Math.round(product.discountPercentage)}%</span>
            )}
          </div>

          <p className="product-description">{product.description}</p>

      
          <div className="quantity-selector">
            <span className="quantity-label">Quantity:</span>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn"
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>
          </div>

                <div className="product-actions">
            <button className="btn-primary add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn-secondary wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

               <div className="product-meta">
            <div className="meta-item">
              <span className="meta-label">SKU:</span>
              <span className="meta-value">{product.sku || 'N/A'}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category:</span>
              <span className="meta-value">{product.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tags:</span>
              <span className="meta-value">
                {product.tags?.join(', ') || 'No tags'}
              </span>
            </div>
          </div>
        </div>
      </div>

      
      {product.reviews && product.reviews.length > 0 && (
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">{review.reviewerName || 'Anonymous'}</span>
                  <span className="review-rating">{'⭐'.repeat(review.rating || 5)}</span>
                </div>
                <p className="review-comment">{review.comment}</p>
                <span className="review-date">
                  {review.date ? new Date(review.date).toLocaleDateString() : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      
      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="products-grid">
          {window.shopProducts?.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

