import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
	return (
		<footer className='footer'>
			<nav>
				<ul className='footer__links'>
					<li className='footer__item'>
						<a
							href='https://www.instagram.com/yoursforminemusic/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<InstagramIcon fontSize='small' style={{ color: '#c4c4c4' }} />
						</a>
					</li>
					<li className='footer__item'>
						<a
							href='https://www.facebook.com/yoursforminemusic'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FacebookIcon fontSize='small' style={{ color: '#c4c4c4' }} />
						</a>
					</li>
					<li className='footer__item'>
						<a
							href='https://www.youtube.com/channel/UCXwVI45BmbHl-oqWo_Rmmvw'
							target='_blank'
							rel='noopener noreferrer'
						>
							<YouTubeIcon fontSize='small' style={{ color: '#c4c4c4' }} />
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
