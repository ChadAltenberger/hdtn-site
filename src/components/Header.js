import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/About.css';

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
			<NavLink className='nav__brand' to='/'>
				<h2 className='nav__brand--logo'>HDTN</h2>
			</NavLink>
			<ul className='nav__links'>
				<li className='nav__item'>
					<NavLink
						exact
						to='/'
						className='nav__item--link'
						activeClassName='selected'
					>
						Home
					</NavLink>
				</li>
				<li className='nav__item'>
					<NavLink
						exact
						to='/about'
						className='nav__item--link'
						activeClassName='selected'
					>
						About
					</NavLink>
				</li>
				<li className='nav__item'>
					<NavLink
						exact
						to='/listen'
						className='nav__item--link'
						activeClassName='selected'
					>
						Listen
					</NavLink>
				</li>
				<li className='nav__item'>
					<NavLink
						exact
						to='/read'
						className='nav__item--link'
						activeClassName='selected'
					>
						Read
					</NavLink>
				</li>
				<li className='nav__item'>
					<NavLink
						exact
						to='/donate'
						className='nav__item--link'
						activeClassName='selected'
					>
						Donate
					</NavLink>
				</li>
			</ul>
			<div
				className='burger'
				onClick={() => {
					if (toggle === false) {
						//Toggle nav
						const nav = document.querySelector('.nav__links');
						const navLinks = document.querySelectorAll('.nav__item');
						const backdrop = document.querySelector('.backdrop');
						nav.classList.toggle('nav__active');
						backdrop.classList.toggle('visible');

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
