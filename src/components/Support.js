import React from 'react';
import Header from './Header';
import '../styles/Support.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Support() {
	return (
		<>
			<Header color='#f3f3f3' />
			<div className='support-container'>
				<div className='showcase'>
					<div className='showcase-content'>
						<h1>// There is hope //</h1>
						<p>
							"Nobody really loves you.”{<br />}
							{<br />}“Life isn’t worth living.”
							{<br />}
							{<br />}
							“You’re a burden to everyone.”{<br />}
							{<br />}“You’ll never be good enough.”{<br />}
							{<br />}“You won’t be missed when you die.”{<br />}
							{<br />}If you have ever struggled with these thoughts, you are
							not alone. According to data collected from the World Health
							Organization, from 2000-2016, roughly 800,000 people commit
							suicide every year. That is one person EVERY 40 SECONDS. The data
							also indicates that for each adult who commits suicide, there may
							have been over 20 others who attempted to take their life and did
							not succeed. Depression is currently preying on over 264 million
							people of all ages.{<br />}
							{<br />}So what can we do about it?
						</p>
						<KeyboardArrowDownIcon className='arrow' fontSize='large' />
					</div>
				</div>

				{/* boxes */}
				<div className='box box-1'>
					<div className='box-title box-1__title'>
						<h1>Normalize conversations about mental health</h1>
					</div>
					<div className='box-content box-1__content'>
						<p>
							I (Joey) honestly didn’t want to write songs about something so
							sad. The lyrics throughout YFM:HDTN were incredibly difficult for
							me to write, in places, as I spent hours wrestling with my own
							fears and insecurities.{<br />}
							{<br />}I haven’t wanted to take my own life in about 15 years,
							but the battles against anxiety, depression, and intrusive
							thoughts are still very common for me.{<br />}
							{<br />}It’s just so much easier to pretend like everything is
							fine...but I refuse to keep quiet any longer. Too many people are
							silently fighting for their lives!{<br />}
							{<br />}Will you join Yours For Mine? Will you stand with us in an
							effort to raise awareness about the things that really matter?
						</p>
					</div>
				</div>
				<div className='box box-2'>
					<div className='box-title box-2__title'>
						<h1>Listen</h1>
					</div>
					<div className='box-content box-2__content'>
						<p>
							That person that you think is just saying weird stuff for
							attention? Slow down and listen. Really listen. You don’t have to
							have all of the answers. There are resources that you can provide
							a person, if they need professional help (see below).{<br />}
							{<br />}In the meantime, your presence means more than you know.
							Encourage people to share what they are comfortable sharing, and
							then thank them for opening up, if they do. It often takes a great
							deal of courage to let somebody in.
						</p>
					</div>
				</div>
				<div className='box box-3'>
					<div className='box-title box-3__title'>
						<h1>Seek help</h1>
					</div>
					<div className='box-content box-3__content'>
						<p>
							If you are one of the many who are struggling, somewhere under the
							umbrella of mental health issues, please reach out. You never have
							to be alone.{<br />}
							{<br />}
							<b>Don’t give up. Don’t give up. Don’t give up.</b>
							{<br />}
							{<br />}National Suicide Prevention Lifeline:{' '}
							<a href='tel:8002738255'>800-273-8255</a>
							{<br />}
							{<br />}Journey Counseling Ministries (Harrisonburg, VA):
							<a href='tel:5409083464'>540-908-3464</a>
							{<br />}
							{<br />}
							<a
								href='https://www.journeycounselingministries.org/'
								target='_blank'
								rel='noopener noreferrer'
							>
								journeycounselingministries.org
							</a>
						</p>
					</div>
				</div>
				<div className='box box-4'>
					<div className='box-title box-4__title'>
						<h1>Give</h1>
					</div>
					<div className='box-content box-4__content'>
						<p>
							If you would like to help pay for therapy sessions for folks who
							cannot cover their own costs, please consider giving here:{<br />}
							{<br />}
							<a
								href='https://www.journeycounselingministries.org/donate/'
								target='_blank'
								rel='noopener noreferrer'
							>
								JourneyCounseling/donate
							</a>
							{<br />}
							{<br />}
							If you’re interested in giving to the band, please do so here:
							{<br />}
							{<br />}
							<a
								href='https://www.paypal.com/paypalme/chadaltenberger'
								target='_blank'
								rel='noopener noreferrer'
							>
								$Donate$
							</a>{' '}
							(include a note with the #yfm)
						</p>
					</div>
				</div>
				<div className='box box-5'>
					<div className='box-title box-5__title'>
						<h1>Consider Christ</h1>
					</div>
					<div className='box-content box-5__content'>
						<p>
							As beautiful as music and books and therapy and giving can be,
							each of the members of YFM have found their ultimate rest in
							Jesus, the Great Healer. We understand that not everybody will
							share our beliefs, but no matter what you believe...we love you,
							and we hope that you love this project. God bless
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Support;
