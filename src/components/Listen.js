import React from 'react';
import Backdrop from './Backdrop';
import SongTile from './SongTile';
import '../styles/Listen.css';

function Listen() {
	return (
		<>
			<Backdrop />
			<div className='listenMain'>
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
				<SongTile />
			</div>
		</>
	);
}

export default Listen;
