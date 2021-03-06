import React, { useState } from 'react';
import '../styles/SongWindow.css';
import { SONGS } from '../songs';

function SongWindow(props) {
	// const [songs] = useState(SONGS);

	return (
		<div className='songWindow'>
			<div className='songWindow__image'>
				<img
					className='songWindow__image'
					src={props.image}
					alt={props.title}
				/>
			</div>
			<div className='songWindow__audio'>
				<audio
					src={props.audio}
					className='songWindow__audio'
					controls
					controlsList='nodownload'
				>
					<p>Sorry, your browser does not support this audio player.</p>
				</audio>
			</div>
			<div className='songWindow__lyrics'>
				<p>{props.lyrics}</p>
			</div>
		</div>
	);
}

export default SongWindow;
