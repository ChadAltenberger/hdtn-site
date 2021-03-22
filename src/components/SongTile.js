import React, { useState } from 'react';
import SongWindow from './SongWindow';
import '../styles/SongTile.css';
import Backdrop from './Backdrop';

function SongTile(props) {
	return (
		<div
			style={{
				backgroundImage: `url('${process.env.PUBLIC_URL}/images/${props.image}')`
			}}
			className='songTile'
			onClick={props.onClick}
		></div>
	);
}

export default SongTile;
