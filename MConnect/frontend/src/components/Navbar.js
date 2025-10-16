import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setIsMenuOpen(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setIsMenuOpen(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">MConnect</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`} 
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/sell' ? 'active fw-bold' : ''}`} 
                  to="/sell"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bi bi-plus-circle me-1"></i> Sell Item
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/products' ? 'active fw-bold' : ''}`} 
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bi bi-grid me-1"></i> Browse
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row">
              <button 
                className="btn btn-outline-light me-lg-2 mb-2 mb-lg-0"
                onClick={handleLoginClick}
              >
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </button>
              <button 
                className="btn btn-light"
                onClick={handleSignupClick}
              >
                <i className="bi bi-person-plus me-1"></i> Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal 
        show={showLogin} 
        onHide={closeModals} 
        onSwitchToSignup={handleSignupClick}
      />
      
      <SignupModal 
        show={showSignup} 
        onHide={closeModals} 
        onSwitchToLogin={handleLoginClick}
      />
    </>
  );
};

export default Navbar;
