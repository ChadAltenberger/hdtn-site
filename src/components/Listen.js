import React, { useState } from 'react';
import Header from './Header';
import SongTile from './SongTile';
import SongWindow from './SongWindow';
import '../styles/Listen.css';
import { SONGS } from '../songs';

function Listen() {
	const [selectedTile, setSelectedTile] = useState(null);

	return (
		<>
			<Header color='rgb(243, 243, 243)' />
			<div className='container'>
				{SONGS.map(song => {
					return (
						<SongTile
							key={song.id}
							image={song.image}
							onClick={() => setSelectedTile(song)}
						/>
					);
				})}
				{selectedTile && (
					<SongWindow
						close={() => setSelectedTile(null)}
						selectedSong={selectedTile}
					/>
				)}
			</div>
		</>
	);
}

export default Listen;
