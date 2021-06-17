import React from 'react';
import Header from './Header';
import '../styles/Read.css';
import '../styles/Utilities.css';

function Read() {
	return (
		<>
			<Header color='#f3f3f3' />
			<div className='flex-columns read flex-reverse'>
				<div className='row'>
					<div className='column'>
						<div className='column-1 read-title'>
							<h1>The Story</h1>
							<p>
								It's about mental health. It's about struggling to believe that
								God is good. It's about a young boy named Habit who runs away
								from home and gets trapped in a town called SEDUCTION. It's
								about life and death and life after death. It's about hope.
							</p>
						</div>
					</div>
					<div className='column '>
						<div className='column-2 story'>
							<h3>Click the link below to read and download the story</h3>
							<a
								href='https://drive.google.com/file/d/12MUltS82gsH3eh2144fQW1SZzJaSgmni/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button>Download the story</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Read;
