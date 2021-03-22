import React, { useState } from 'react';
import '../styles/SongWindow.css';
import Backdrop from './Backdrop';

function SongWindow(props) {
	// const [showModal, setShowModal] = useState(true);

	// const open = () => {
	// 	setShowModal(true);
	// };

	// const close = () => {
	// 	setShowModal(false);
	// };

	return (
		<>
			<Backdrop onClick={props.close}>
				<div className='songWindow'>
					<div className='songWindow__image'>
						<img
							className='songWindow__image'
							src='./images/HDTN.jpg'
							alt={props.title}
						/>
					</div>
					<div className='songWindow__audio'>
						<audio
							src=''
							className='songWindow__audio'
							controls
							controlsList='nodownload'
						>
							<p>Sorry, your browser does not support this audio player.</p>
						</audio>
					</div>
					<div className='songWindow__lyrics'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							a inventore ipsam maiores quo velit iure, cumque consequatur esse
							doloremque et, molestias quaerat placeat sint unde fuga hic nihil
							tenetur?
						</p>
					</div>
				</div>
			</Backdrop>
		</>
	);
}

export default SongWindow;
