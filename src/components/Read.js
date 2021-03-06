import React from 'react';
import Backdrop from './Backdrop';
import Header from './Header';
import '../styles/Read.css';

function Read() {
	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />
			<div className='backdrop'></div>
			<div className='readMain'>
				<h1>Read the story that accompanies the album.</h1>
			</div>
		</>
	);
}

export default Read;
