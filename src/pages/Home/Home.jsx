import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCounter from '../../components/CharacterCounter/CharacterCounter';
import TodoList from '../../components/TodoList/TodoList';

export const Home = () => {
	return (
		<div className='App-Page'>
			<h2>Recoil</h2>
			<p>
				A demo of{' '}
				<a href='https://recoiljs.org/' target='_blank' rel='noreferrer'>
					{' '}
					Recoil
				</a>
				, another state management library for React.
			</p>
			<p>
				Check the console for <i>recoil-logger</i> logs when using the components below:
			</p>
			<CharacterCounter />
			<TodoList />
		</div>
	);
};

export default Home;
