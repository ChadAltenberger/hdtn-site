import React from 'react';
import Backdrop from './Backdrop';
import Header from './Header';
import '../styles/About.css';

function About() {
	return (
		<>
			<Header color='rgb(44, 43, 43, 0.05)' />
			{/* flex container */}
			<div className='aboutContainer'>
				{/* flex item 1 */}
				<div className='info'></div>
				<h1>// We're all hiding something, or hiding from something //</h1>
				<p>
					This project aims to encourage the hopeless with the simple truth that
					we're never alone in our struggles
				</p>

				{/* flex item 2 */}
				<div className='credits'>
					<p>
						Produced by: Yours For Mine{<br />}
						Engineered & Mixed by: Chad Altenberger of Three Arrows Sound
						{<br />}
						All lyrics by: Joey Testa{<br />}
						Accompanying story written by: Joey Testa (Edited by: Suazanna
						Spears & Ace Cosner){<br />}
						Artwork by: Tyler Dowdy{<br />}
						{<br />}
						Yours For Mine is:{<br />}
						Joey Testa: Vocals{<br />}
						Chad Altenberger: Guitars{<br />}
						Benjamin Cooley: Guitars{<br />}
						Stephen Minnick: Bass, Keys/Synth, Background Vocals{<br />}
						Jonathan Woods: Drums {<br />}
						Additional Vocals on tracks 5, 7, 9, & 11 by: Aaron Cosner{<br />}
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
