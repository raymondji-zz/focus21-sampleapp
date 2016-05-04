import * as types from '../constants/actionTypes';

export function userLoggedIn(jwt) {
	return { type: types.USER_LOGGED_IN, jwt };
}

export function userLoggedOut() {
	return { type: types.USER_LOGGED_OUT };
}