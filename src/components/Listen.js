import React, { useState } from 'react';
import Header from './Header';
import SongTile from './SongTile';
import SongWindow from './SongWindow';
import Backdrop from './Backdrop';
import '../styles/Listen.css';
import { SONGS } from '../songs';

function Listen() {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	if (showModal) {
		return (
			<>
				<Header color='rgb(44, 43, 43, 0.05)' />;
				<div className='container'>
					{SONGS.map(song => {
						return (
							<>
								<SongWindow close={closeModal} />;
								<SongTile image={song.image} onClick={openModal} />;
							</>
						);
					})}
				</div>
			</>
		);
	} else
		return (
			<>
				<Header color='rgb(243, 243, 243)' />;
				<div className='container'>
					{SONGS.map(song => {
						return <SongTile image={song.image} onClick={openModal} />;
					})}
				</div>
			</>
		);
}

export default Listen;
