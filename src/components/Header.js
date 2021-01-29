import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
	const [toggle, setToggle] = useState(false);

	// const setToggle = () => {
	//   if (toggle) {
	//     const burger = document.querySelector('.burger');
	//     const nav = document.querySelector('.nav__links');

	//     burger.addEventListener('click', () => {
	//       nav.classList.toggle('nav__active');
	//     });
	//   } else {
	//     !toggle;
	//   }
	// };

	// navSlide();
	return (
		<nav role='navigation' className='mainNav'>
			<Link className='nav__brand' to='/'>
				<h2 className='nav__brand--logo'>HDTN</h2>
			</Link>
			<ul className='nav__links'>
				<li className='nav__item'>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav__item'>
					<Link to='/about'>About</Link>
				</li>
				<li className='nav__item'>
					<Link to='/listen'>Listen</Link>
				</li>
				<li className='nav__item'>
					<Link to='/read'>Read</Link>
				</li>
				<li className='nav__item'>
					<Link to='/donate'>Donate</Link>
				</li>
			</ul>
			<div
				className='burger'
				onClick={() => {
					// console.log(toggle);
					if (toggle === false) {
						//Toggle nav
						const nav = document.querySelector('.nav__links');
						const navLinks = document.querySelectorAll('.nav__item');
						nav.classList.toggle('nav__active');

						//Animate links
						navLinks.forEach((link, index) => {
							if (link.style.animation) {
								link.style.animation = '';
							} else {
								link.style.animation = `navLinkFade 0.5s ease forwards ${
									index / 7 + 0.1
								}s`;
							}
						});
					} else {
						setToggle(!toggle);
					}
					//Burger animation
					const burger = document.querySelector('.burger');
					burger.classList.toggle('rotate');
				}}
			>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Header;
