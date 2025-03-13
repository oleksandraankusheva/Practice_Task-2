import React from 'react';
import icon from '../assets/svg/icon.svg';

function Header() {
  return (
    <header>
      <div className="icon-menu" style={{ backgroundImage: `url(${icon})` }}></div>
      <div className="menu">
        <a href="#content">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;