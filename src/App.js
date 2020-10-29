import React from 'react';
import './App.css';
import Home from './Home/Home';
import { Route, Redirect } from 'react-router-dom';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Results from './Results/Results';
function App() {
	// console.log('helloworld');
	return (
		<div className='App'>
			<Nav />
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/search' component={Search} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				{/* <Route path='/results' render={<Results />} /> */}
			</main>
		</div>
	);
}
export default App;
