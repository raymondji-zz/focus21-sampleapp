import * as types from '../constants/actionTypes';

export function emailKeypress(value) {
	return { type: types.EMAIL_KEYPRESS, value };
}

export function passwordKeypress(value) {
	return { type: types.PASSWORD_KEYPRESS, value };
}

export function loginStarted() {
	return { type: types.LOGIN_STARTED };
}

export function loginFailed() {
	return { type: types.LOGIN_FAILED };
}

export function emailVerificationStarted() {
	return { type: types.EMAIL_VERIFICATION_STARTED };
}

export function emailVerified(public_user_info) {
	return { type: types.EMAIL_VERIFIED, public_user_info };
}

export function emailFailed() {
	return { type: types.EMAIL_FAILED };
}

