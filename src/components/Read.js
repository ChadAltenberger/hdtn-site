import React from 'react';
import Backdrop from './Backdrop';
import SongWindow from './SongWindow';
import Header from './Header';
import '../styles/Read.css';

function Read() {
	const openModal = () => {
		return <SongWindow />;
	};
	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />
			<div className='readMain'>
				<h1>Read the story that accomponies the album.</h1>
			</div>
		</>
	);
}

export default Read;
