import React from 'react';
import Backdrop from './Backdrop';
import '../styles/About.css';

function About() {
	return (
		<>
			<Backdrop />
			<div className='aboutBackgroundImage'></div>
			<div className='aboutMain'>
				<div className='info'>
					<p>
						Produced by: Chad Altenberger and Yours For Mine{<br />}
						Engineered & Mixed by: Chad Altenberger of Three Arrows Sound
						{<br />}
						All lyrics by: Joey Testa{<br />}
						Accompanying story written by: Joey Testa{<br />}
						Illustrations by: Tyler Dowdy{<br />}
						{<br />}
						Yours For Mine is:{<br />}
						Joey Testa: Vocals{<br />}
						Chad Altenberger: Guitars{<br />}
						Benjamin Cooley: Guitars{<br />}
						Stephen Minnick: Bass, Keys/Synth, Background Vocals{<br />}
						Jonathan Woods: Drums {<br />}
						Additional Vocals on tracks 5, 7, 9, 11 by: Aaron Cosner{<br />}
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
