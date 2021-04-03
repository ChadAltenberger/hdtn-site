import React, { useState } from 'react';
import '../styles/SongWindow.css';
import Backdrop from './Backdrop';

function SongWindow(props) {
	return (
		<>
			<Backdrop onClick={props.close} />
			<div className='songWindow'>
				<div className='songWindow__image'>
					<img
						className='songWindow__image'
						src={`${process.env.PUBLIC_URL}/images/${props.selectedSong.image}`}
						alt={props.selectedSong.title}
					/>
				</div>
				<div onClick={props.close} className='close'>
					+
				</div>
				<div className='songWindow__audio'>
					<audio
						src={`${process.env.PUBLIC_URL}/audio/${props.selectedSong.track}`}
						className='songWindow__audio'
						controls
						controlsList='nodownload'
					>
						<p>Sorry, your browser does not support this audio player.</p>
					</audio>
				</div>
				<div className='songWindow__lyrics'>
					<p>{props.selectedSong.lyrics}</p>
				</div>
			</div>
		</>
	);
}

export default SongWindow;
