/* eslint-disable no-constant-condition */
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserNameState, fetchUsers, fetchUsersError } from '../../atoms/user';

function UserInfo() {
	const [userName, setUserName] = useRecoilState(currentUserNameState);

	function FetchUsersError() {
		const users = useRecoilValue(fetchUsersError);

		if (users.status) {
			return (
				<div className='error'>
					<p>{users.status} Error</p>
					<p>{JSON.stringify(users)}</p>
				</div>
			);
		}
	}

	function FetchUsers() {
		const users = useRecoilValue(fetchUsers);

		if (users.status) {
			return (
				<div className='error'>
					<p>{users.status} Error</p>
					<p>{JSON.stringify(users)}</p>
				</div>
			);
		}
		return (
			<div>
				{users &&
					users.length &&
					users.map((user, i) => (
						<div key={i}>
							<p>{user.name}</p>
						</div>
					))}
			</div>
		);
	}

	return (
		<div>
			<div>
				<h4>Synchronous: </h4>
				<p>{userName}</p>
			</div>
			<div>
				<h4>Asynchronous Error:</h4> <FetchUsersError />
			</div>

			<div>
				<h4>Asynchronous:</h4> <FetchUsers />
			</div>
		</div>
	);
}

export default UserInfo;
