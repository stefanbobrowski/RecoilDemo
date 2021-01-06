/* eslint-disable no-useless-catch */
import { atom, selector } from 'recoil';

export const currentUserIDState = atom({
	key: 'CurrentUserID',
	default: 'Anatolio',
});

export const currentUserNameState = selector({
	key: 'CurrentUserName',
	get: ({ get }) => {
		return get(currentUserIDState);
	},
});

export const fetchUsersError = selector({
	key: 'usersErrorSelector',
	get: async ({ get }) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/usersx');

		if (response.status >= 400) {
			return response;
		}

		const data = await response.json();
		return data;
	},
});

export const fetchUsers = selector({
	key: 'usersSelector',
	get: async ({ get }) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		if (response.status >= 400) {
			return response;
		}

		const data = await response.json();
		return data;
	},
});
