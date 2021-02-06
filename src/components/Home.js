import React from 'react';
import Backdrop from './Backdrop';
import '../styles/Home.css';

function Home() {
	return (
		<>
			<Backdrop />
			<div className='homeBackgroundImage'></div>
			<div className='home'>
				<div className='card'>
					<h1 className='title'>Yours For Mine: How Dark the Night</h1>
					<hr className='divider1' />
					<p className='subtitle'>
						An album by Yours For Mine with accompanying story and illustrations
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
