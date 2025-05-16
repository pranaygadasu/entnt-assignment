// src/components/Header.jsx
import React from 'react';
//import './header.css'; // You can keep this if using external CSS

function Header() {
  return (
    <header className="header">
      <div className="header-top-left">
        <img src="/logo.png" alt="ENTNT Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1 className="entnt-text">ENTNT</h1>
        <h2 className="subtitle">Ship Maintenance Dashboard</h2>
      </div>
    </header>
  );
}

export default Header;
