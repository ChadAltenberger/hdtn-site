import React from 'react';
import Backdrop from './Backdrop';
import Header from './Header';
import '../styles/Donate.css';

function Donate() {
	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />
			<div className='backdrop'></div>
			<div className='donateMain'>
				<h1>Donate to an organization.</h1>
			</div>
		</>
	);
}

export default Donate;
