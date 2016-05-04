import * as types from '../constants/actionTypes';

export function appsListReceived(appsList) {
	return { type: types.APPS_LIST_RECEIVED, appsList };
}
