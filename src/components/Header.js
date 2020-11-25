import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <Link className='header__brand' to='/'>
        <h2 className='header__brand--logo'>HDTN</h2>
      </Link>
      <nav className='header__nav' role='navigation'>
        <ul>
          <li className='header__nav--item'>Home</li>
          <li className='header__nav--item'>Listen</li>
          <li className='header__nav--item'>Read</li>
          <li className='header__nav--item'>Credits</li>
          <li className='header__nav--item'>Donate</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
