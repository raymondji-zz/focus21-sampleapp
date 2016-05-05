import { APPS_LIST_RECEIVED } from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialState = {
    appsList: []
};

export default function appsPageState(state = initialState, action) {
    switch (action.type) {
        case APPS_LIST_RECEIVED:         
            return objectAssign({}, state, { 
                appsList: action.appsList
            });
        
        default:
            return state;
    }
}
