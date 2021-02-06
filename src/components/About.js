import React from 'react';
import Backdrop from './Backdrop';
import '../styles/About.css';

function About() {
	return (
		<>
			<Backdrop />
			<div className='backdrop'></div>
			<div className='aboutMain'>
				<div className='info'>
					<p>
						Produced by: Chad Altenberger and Yours For Mine{'\n'}
						Engineered & Mixed by: Chad Altenberger of Three Arrows Sound{'\n'}
						All lyrics by: Joey Testa{'\n'}
						Accompanying story written by: Joey Testa{'\n'}
						Illustrations by: Tyler Dowdy{'\n'}
						{'\n'}
						Yours For Mine is: Joey Testa: Vocals{'\n'}
						Chad Altenberger: Guitars{'\n'}
						Benjamin Cooley: Guitars{'\n'}
						Stephen Minnick: Bass, Keys/Synth, Background Vocals{'\n'}
						Jonathan Woods: Drums Additional{'\n'}
						Vocals on tracks 5, 7, 9, 11 by: Aaron Cosner{'\n'}
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
