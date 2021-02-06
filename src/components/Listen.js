import React from 'react';
import Backdrop from './Backdrop';
import SongTile from './SongTile';
import '../styles/Listen.css';

function Listen() {
	return (
		<>
			<Backdrop />
			<div className='listenBody'>
				<div className='gridContainer'>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
					<div className='tileContainer'>
						<SongTile />
					</div>
				</div>
			</div>
		</>
	);
}

export default Listen;
