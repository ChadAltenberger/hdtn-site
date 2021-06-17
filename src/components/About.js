import React from 'react';
import Backdrop from './Backdrop';
import Header from './Header';
import '../styles/About.css';
import '../styles/Utilities.css';

function About() {
	return (
		<>
			<Header color='#f3f3f3' />
			<div className='flex-columns about'>
				<div className='row'>
					<div className='column'>
						<div className='column-1 about-title'>
							<h2>
								// We're all hiding something, or hiding from something //
							</h2>
							<p>
								This project aims to encourage the hopeless with the simple
								truth that we're never alone in our struggles
							</p>
						</div>
					</div>
					<div className='column '>
						<div className='column-2 credits'>
							<h1>CREDITS</h1>
							<p>
								Produced by: Yours For Mine{<br />}
								Engineered & Mixed by: Chad Altenberger of{' '}
								<a
									href='https://www.threearrowssound.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Three Arrows Sound
								</a>
								{<br />}
								Mastered by: Don Miller of Airborne Audio{<br />}
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
								Additional Vocals on tracks 5, 7, 9, & 11 by: Aaron Cosner
								{<br />}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
