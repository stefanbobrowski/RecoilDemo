import React from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';

export const Demo = () => {
	return (
		<div className='App-Page'>
			<h2>Demo</h2>
			<p>This is the Recoil Demo page. An async request is made below (Check network tab).</p>
			<UserInfo />
		</div>
	);
};

export default Demo;
