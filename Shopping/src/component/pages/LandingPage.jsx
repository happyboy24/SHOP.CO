import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const LandingPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch('https://dummyjson.com/products?limit=8')
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[0, 1, 2, 3, 4].map(i => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24">
            <polygon 
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
              fill={i < Math.floor(rating) ? '#FFC633' : (i < rating ? '#FFC633' : '#E8E8E8')}
            />
          </svg>
        ))}
        <span className="stars__count">{rating.toFixed(1)}/5</span>
      </div>
    )
  }

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      verified: true,
      text: "I'm blown away by the quality and style of the products. From casual wear to elegant pieces, every item I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      rating: 5,
      verified: true,
      text: "Finding products that align with my personal style used to be a challenge. The range of options is truly remarkable, catering to a variety of tastes."
    },
    {
      name: "James L.",
      rating: 5,
      verified: true,
      text: "As someone who's always on the lookout for unique pieces, I'm thrilled with this shop. The selection is not only diverse but also on point with the latest trends."
    }
  ]

  const scrollTestimonials = (dir) => {
    const newIndex = (testimonialIndex + dir) % testimonials.length
    setTestimonialIndex(newIndex >= 0 ? newIndex : testimonials.length - 1)
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__content">
            <h1 className="hero__title">FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE</h1>
            <p className="hero__desc">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="hero__cta">Shop Now</button>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">200+</span>
                <span className="hero__stat-label">International Brands</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">2,000+</span>
                <span className="hero__stat-label">High-Quality Products</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">30,000+</span>
                <span className="hero__stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img 
              // src="fashion-shop.svg"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop&crop=top" 
              alt="Fashion" 
              className="hero__image"
            />
            <div className="hero__star hero__star--tl">✦</div>
            <div className="hero__star hero__star--tr">✦</div>
            <div className="hero__star hero__star--br">✦</div>
          </div>
        </div>
        <div className="hero__bg-star hero__bg-star--1">✦</div>
        <div className="hero__bg-star hero__bg-star--2">✦</div>
      </section>

      
      <div className="brands-bar">
        <div className="brands-bar__inner">
          <span className="brands-bar__brand">VERSACE</span>
          <span className="brands-bar__brand">ZARA</span>
          <span className="brands-bar__brand">GUCCI</span>
          <span className="brands-bar__brand">PRADA</span>
          <span className="brands-bar__brand">Calvin Klein</span>
        </div>
      </div>


      <section className="product-section">
        <div className="container">
          {/* <h2 className="product-section__title">TOP SELLING</h2> */}
          
          {loading && <div className="loading">Loading products...</div>}
          {error && <div className="error">Error: {error}</div>}
          
          {!loading && !error && (
            <div className="product-section__grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} renderStars={renderStars} />
              ))}
            </div>
          )}
          
          <div className="product-section__footer">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
      </section>


      <section className="dress-style">
        <div className="container">
          <div className="dress-style__box">
            <h2 className="dress-style__title">BROWSE BY DRESS STYLE</h2>
            <div className="dress-style__grid">
              <div className="dress-style__card">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=300&fit=crop&crop=top" 
                  className="dress-style__img"
                  alt="Casual"
                />
                <div className="dress-style__overlay"></div>
                <span className="dress-style__label">Casual</span>
              </div>
              <div className="dress-style__card">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=300&fit=crop&crop=top" 
                  className="dress-style__img"
                  alt="Formal"
                />
                <div className="dress-style__overlay"></div>
                <span className="dress-style__label">Formal</span>
              </div>
              <div className="dress-style__card">
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=300&fit=crop&crop=top" 
                  className="dress-style__img"
                  alt="Party"
                />
                <div className="dress-style__overlay"></div>
                <span className="dress-style__label">Party</span>
              </div>
              <div className="dress-style__card">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=300&fit=crop&crop=top" 
                  className="dress-style__img"
                  alt="Gym"
                />
                <div className="dress-style__overlay"></div>
                <span className="dress-style__label">Gym</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">OUR HAPPY CUSTOMERS</h2>
            <div className="testimonials__nav">
              <button className="testimonials__nav-btn" onClick={() => scrollTestimonials(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="testimonials__nav-btn" onClick={() => scrollTestimonials(1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="t-stars">
                  {[0, 1, 2, 3, 4].map(i => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                      <polygon 
                        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
                        fill={i < t.rating ? '#FFC633' : '#E8E8E8'}
                      />
                    </svg>
                  ))}
                </div>
                <div className="testimonial-card__name">
                  {t.name}
                  {t.verified && (
                    <span className="testimonial-card__verified">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="container">
        <div className="newsletter">
          <h2 className="newsletter__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="newsletter__right">
            <div className="newsletter__input-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input 
                className="newsletter__input" 
                type="email" 
                placeholder="Enter your email address"
              />
            </div>
            <button className="newsletter__btn">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage

