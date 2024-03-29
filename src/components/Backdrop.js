import React from 'react';
import '../styles/Backdrop.css';

function Backdrop({ onClick }) {
	return <div className='backdrop' onClick={onClick}></div>;
}

export default Backdrop;
