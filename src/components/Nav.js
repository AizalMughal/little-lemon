import React from 'react';
import { Link } from 'react-router-dom';
// Agar logo import karna hai toh yahan kar lein
import logo from '../icons_assets/Logo.svg'; 

function Nav() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;