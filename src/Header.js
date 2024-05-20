import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <header className="header">
      <h1>IPL Teams</h1>
      <Link to="/" className="home-button">Home</Link>
    </header>
    </div>
  )
}

export default Header