import React, { useState } from 'react';
import Header from './Header';
import SongTile from './SongTile';
import SongWindow from './SongWindow';
import '../styles/Listen.css';
import { SONGS } from '../songs';

function Listen() {
	const [songs] = useState(SONGS);
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />

			<div className='container'>
				{songs.map(song => {
					return <SongTile image={song.image} />;
				})}
			</div>
		</>
	);
}

export default Listen;
