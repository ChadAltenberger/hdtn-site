import React, { useState } from 'react';
import '../styles/SongTile.css';

function SongTile(props) {
	return (
		<div
			style={{ backgroundImage: `url(${props.image})` }}
			className='songTile'
		></div>
	);
}

export default SongTile;
