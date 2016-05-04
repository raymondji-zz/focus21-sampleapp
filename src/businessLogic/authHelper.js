import ApiHelper from './apiHelper.js';
import * as loginActions from '../actions/loginActions.js';
import * as authActions from '../actions/authActions.js';
import { browserHistory } from 'react-router';


export default class AuthHelper {
    static login(dispatch, email, password) {
        dispatch(loginActions.loginStarted());
        // We call the server to log the user in.
        return ApiHelper.makeLoginRequest(email, password)
            .then(function(response) {
                let jwt = response.id_token;
                localStorage.setItem("jwtToken", jwt);
                dispatch(authActions.userLoggedIn(jwt));
                AuthHelper.redirectIfLoggedIn();                
            }, function(error) {
                dispatch(loginActions.loginFailed()); 
            });
    }
    
    static verifyEmail(dispatch, email) {
        dispatch(loginActions.emailVerificationStarted());        
        ApiHelper.verifyEmail(email).then(function(response) {
            dispatch(loginActions.emailVerified(response))            
        }, function(error) {
            dispatch(loginActions.emailFailed());
        });
    }
    
    static loggedIn() {
        let jwtToken = localStorage.getItem("jwtToken");
        return !!jwtToken;
    }

    static decodeJWT(jwt) {
        // fake
        return {
            "sub": "users/TzMUocMF4p",
            "name": "Jeffery Aramini",
            "scope": "self groups/admins",
            "exp": "1300819380"
        }
    }

    static redirectIfLoggedIn() {
        if (AuthHelper.loggedIn()) {
            browserHistory.push('/');
        }
    }
    
    static requireAuth(nextState, replace) {
        if (!AuthHelper.loggedIn()) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }
};
