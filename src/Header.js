import React from 'react'
import './Header.css';

function Header({ title }) {
  return (
    <div>
        <header className="header">
      <h1>{title}</h1>
      <button className="home-button">Home</button>
    </header>
    </div>
  )
}

export default Header