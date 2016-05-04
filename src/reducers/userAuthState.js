import { USER_LOGGED_IN,
        USER_LOGGED_OUT } from '../constants/actionTypes';
import authHelper from '../businessLogic/authHelper';
import objectAssign from 'object-assign';

const initialState = {
    name: "",
    photoUrl: "",
    jwt: "",
    user: "",
};

export default function userAuthState(state = initialState, action) {
    switch (action.type) {    
        case USER_LOGGED_IN:
            let decodedJwt = authHelper.decodeJWT(action.jwt);
            
            return objectAssign({}, state, { 
                jwt: action.jwt,
            });
        
        default:
            return state
    }
};