// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <section className="headcontainer">
        <div id="logo">
          <h2>It's not over until I win</h2>
        </div>
        
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <div className={`navigate ${menuOpen ? 'open' : ''}`}>
          <div>
            <Link to="/" className={isActive('/')}>Home</Link>
          </div>
          <div>
            <Link to="/project" className={isActive('/project')}>Projects</Link>
          </div>
          <div>
            <Link to="/research" className={isActive('/research')}>Research</Link>
          </div>
          <div>
            <Link to="/study" className={isActive('/study')}>Study</Link>
          </div>
          <div>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
