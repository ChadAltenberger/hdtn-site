import React, { useState } from 'react';
import '../styles/SongTile.css';

function SongTile(props) {
	return (
		<div
			style={{
				backgroundImage: `url('${process.env.PUBLIC_URL}/images/${props.image}')`
			}}
			className='song-tile'
			onClick={props.onClick}
		></div>
	);
}

export default SongTile;
