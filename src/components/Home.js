import React from 'react';
import Header from './Header';
import '../styles/Home.css';

function Home() {
	return (
		<>
			<Header color='rgba(255, 255, 255, 0.8)' />
			<div className='home-bg-img'></div>
			<div className='home'>
				<div className='card'>
					<h1 className='title'>Yours For Mine: How Dark the Night</h1>
					<hr className='divider-1' />
					<p className='subtitle'>
						An album by Yours For Mine with accompanying story and artwork
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
