import './App.css';
import Home from './components/Home';
import About from './components/About';
import Listen from './components/Listen';
import Read from './components/Read';
import Donate from './components/Donate';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/listen'>
						<Listen />
					</Route>
					<Route exact path='/read'>
						<Read />
					</Route>
					<Route exact path='/donate'>
						<Donate />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
