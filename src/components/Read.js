import React from 'react';
import Backdrop from './Backdrop';
import '../styles/Read.css';

function Read() {
	return (
		<>
			<Backdrop />
			<div className='backdrop'></div>
			<div className='readMain'>
				<h1>Read the story that accompanies the album.</h1>
			</div>
		</>
	);
}

export default Read;
