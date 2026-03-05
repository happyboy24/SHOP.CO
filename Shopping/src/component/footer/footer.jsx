import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">SHOP.CO</span>
            <p className="footer__tagline">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="footer__socials">
              {/* Twitter/X */}
              <div className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </div>
              {/* Facebook */}
              <div className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              {/* Instagram */}
              <div className="footer__social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              {/* GitHub */}
              <div className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><span className="footer__link">About</span></li>
              <li><span className="footer__link">Features</span></li>
              <li><span className="footer__link">Works</span></li>
              <li><span className="footer__link">Career</span></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="footer__col-title">Help</h4>
            <ul className="footer__links">
              <li><span className="footer__link">Customer Support</span></li>
              <li><span className="footer__link">Delivery Details</span></li>
              <li><span className="footer__link">Terms & Conditions</span></li>
              <li><span className="footer__link">Privacy Policy</span></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="footer__col-title">FAQ</h4>
            <ul className="footer__links">
              <li><span className="footer__link">Account</span></li>
              <li><span className="footer__link">Manage Deliveries</span></li>
              <li><span className="footer__link">Orders</span></li>
              <li><span className="footer__link">Payments</span></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer__col-title">Resources</h4>
            <ul className="footer__links">
              <li><span className="footer__link">Free eBooks</span></li>
              <li><span className="footer__link">Development Tutorial</span></li>
              <li><span className="footer__link">How to - Blog</span></li>
              <li><span className="footer__link">Youtube Playlist</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="footer__payments">
            {/* Visa */}
            <div className="payment-badge" style={{ background: '#fff', color: '#1a1f71', borderColor: '#ddd' }}>
              <svg width="38" height="14" viewBox="0 0 38 14" fill="none">
                <text x="0" y="12" fontSize="13" fontWeight="900" fontFamily="Arial" fill="#1a1f71">VISA</text>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="payment-badge" style={{ background: '#fff', borderColor: '#ddd', gap: '4px', padding: '0 10px' }}>
              <svg width="32" height="20" viewBox="0 0 32 20">
                <circle cx="11" cy="10" r="9" fill="#EB001B"></circle>
                <circle cx="21" cy="10" r="9" fill="#F79E1B"></circle>
                <path d="M16 3.8a9 9 0 0 1 0 12.4A9 9 0 0 1 16 3.8z" fill="#FF5F00"></path>
              </svg>
            </div>
            {/* PayPal */}
            <div className="payment-badge" style={{ background: '#fff', borderColor: '#ddd' }}>
              <svg width="52" height="14" viewBox="0 0 52 14">
                <text x="0" y="12" fontSize="12" fontWeight="700" fontFamily="Arial" fill="#003087">Pay</text>
                <text x="22" y="12" fontSize="12" fontWeight="700" fontFamily="Arial" fill="#009cde">Pal</text>
              </svg>
            </div>
            {/* Apple Pay */}
            <div className="payment-badge" style={{ background: '#000', color: '#fff', borderColor: '#000' }}>
              <svg width="48" height="18" viewBox="0 0 48 18">
                <text x="2" y="13" fontSize="11" fontWeight="600" fontFamily="-apple-system,Arial" fill="white">✦ Pay</text>
              </svg>
            </div>
            {/* Google Pay */}
            <div className="payment-badge" style={{ background: '#fff', borderColor: '#ddd' }}>
              <svg width="52" height="18" viewBox="0 0 52 18">
                <text x="0" y="13" fontSize="11" fontWeight="600" fontFamily="Arial">
                  <tspan fill="#4285F4">G</tspan>
                  <tspan fill="#EA4335">o</tspan>
                  <tspan fill="#FBBC05">o</tspan>
                  <tspan fill="#4285F4">g</tspan>
                  <tspan fill="#34A853">l</tspan>
                  <tspan fill="#EA4335">e </tspan>
                  <tspan fill="#555">Pay</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;