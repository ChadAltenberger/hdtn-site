import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <Link className='header__brand' to='/'>
        <h1 className='header__brand--logo'>HDTN</h1>
      </Link>
      <nav className='header__nav' role='navigation'>
        <span>Listen</span>
        <span>Read</span>
        <span>Credits</span>
        <span>Donate</span>
      </nav>
    </div>
  );
}

export default Header;
