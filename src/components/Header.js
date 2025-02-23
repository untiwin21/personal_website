// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 필요하면 Header 전용 스타일을 작성

function Header() {
  return (
    <header>
      <section className="container">
        <div>
          <h2>Untiwin21</h2>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/project">Projects</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/research">Research</Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
