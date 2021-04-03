import React from 'react';
import Header from './Header';
import '../styles/Read.css';

function Read() {
	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />
			<div className='readMain'>
				<h1>Read the story that accomponies the album.</h1>

				<a
					href='https://drive.google.com/file/d/12MUltS82gsH3eh2144fQW1SZzJaSgmni/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
				>
					<button>Download the story</button>
				</a>
			</div>
		</>
	);
}

export default Read;
