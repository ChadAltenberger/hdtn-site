import React, { useState } from 'react';
import '../styles/SongWindow.css';
import Backdrop from './Backdrop';

function SongWindow(props) {
	return (
		<>
			<div className='body'>
				<div className='backdrop' onClick={props.close}></div>
				<div className='song-window'>
					<div className='song-row'>
						<div className='column-1'>
							<img
								className='image'
								src={`${process.env.PUBLIC_URL}/images/${props.selectedSong.image}`}
								alt={props.selectedSong.title}
							/>
						</div>
						<div className='column-2'>
							<div className='audio'>
								<audio
									src={`${process.env.PUBLIC_URL}/audio/${props.selectedSong.track}`}
									className='song-window__audio'
									controls
									controlsList='nodownload'
								>
									<p>Sorry, your browser does not support this audio player.</p>
								</audio>
							</div>
							<div className='lyrics'>
								<p>{props.selectedSong.lyrics}</p>
							</div>
						</div>
					</div>
					<div onClick={props.close} className='close'>
						+
					</div>
				</div>
			</div>
		</>
	);
}

export default SongWindow;
