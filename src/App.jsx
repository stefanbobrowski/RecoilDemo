import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import DemoPage from './pages/Demo/Demo';
import Header from './components/Header/Header';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/demo' component={DemoPage} />
			</Switch>
		</div>
	);
}
export default App;
