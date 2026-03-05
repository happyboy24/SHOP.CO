import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner container">
        <button 
          className="navbar__menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <Link to="/" className="navbar__logo">SHOP.CO</Link>
        
        <ul className="navbar__links" id="nav-links">
          <li><Link to="/" className="navbar__link">Shop</Link></li>
          <li><Link to="/landingpage" className="navbar__link">On Sale</Link></li>
          <li><a href="#" className="navbar__link">New Arrivals</a></li>
          <li><a href="#" className="navbar__link">Brands</a></li>
        </ul>
        
        <div className="navbar__search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input type="text" placeholder="Search for products..." />
        </div>
        
        <div className="navbar__actions">
          <button className="navbar__icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button className="navbar__icon-btn cart-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-badge">3</span>
          </button>
          <button className="navbar__icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="mobile-menu" style={{ 
          background: '#fff', 
          borderTop: '1px solid #E8E8E8',
          padding: '16px 0'
        }}>
          <div className="container">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
              <li><Link to="/landingpage" className="navbar__link" onClick={() => setIsMenuOpen(false)}>On Sale</Link></li>
              <li><a href="#" className="navbar__link" onClick={() => setIsMenuOpen(false)}>New Arrivals</a></li>
              <li><a href="#" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Brands</a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

