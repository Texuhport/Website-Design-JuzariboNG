import React from 'react';
import './Navbar.css'; // Make sure this file exists and is correctly imported
import logo from './Logoribo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-item"></div>
      <a href="/">
        <img src={logo} alt="Jozoribo Technology Ltd. Logo" className="logo" />
      </a>
      <div className="links">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
