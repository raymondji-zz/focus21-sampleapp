import { EMAIL_VERIFIED, EMAIL_FAILED,
        LOGIN_FAILED, USER_LOGGED_IN,
        USER_LOGGED_OUT, EMAIL_KEYPRESS,
        PASSWORD_KEYPRESS, LOGIN_STARTED,
        EMAIL_VERIFICATION_STARTED } from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialLoginFormState = {
    passwordInput: "",
    emailInput: "",
    emailFormatValid: false,
    passwordFormatValid: false,
    errorMessage: "",
    emailVerificationInProgress: false,
    loginInProgress: false,
    verifiedEmail: "",
    name: "",
    photoUrl: ""
}

export default function loginFormState(state = initialLoginFormState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return objectAssign({}, state, initialLoginFormState, {
                loginInProgress: false
            })
        
        case USER_LOGGED_OUT:
            return objectAssign({}, state, initialLoginFormState)
            
        case LOGIN_STARTED:
            return objectAssign({}, state, {
                errorMessage: "",
                loginInProgress: true
            })
            
        case LOGIN_FAILED:
            return objectAssign({}, state, {
                errorMessage: "Password was incorrect.",
                loginInProgress: false
            })
            
       case EMAIL_VERIFICATION_STARTED:
            return objectAssign({}, state, {
                errorMessage: "",
                emailVerificationInProgress: true
            })
            
        case EMAIL_VERIFIED:         
            return objectAssign({}, state, { 
                verifiedEmail: action.public_user_info.email,
                name: action.public_user_info.name,
                photoUrl: action.public_user_info.photoUrl,
                errorMessage: "",
                emailVerificationInProgress: false
            });

        case EMAIL_FAILED:
            return objectAssign({}, state, {
                errorMessage: "Email did not match any account.",
                emailVerificationInProgress: false
            })
            
        case EMAIL_KEYPRESS:
            return objectAssign({}, state, {
                errorMessage: "",
                emailInput: action.value,
                emailFormatValid: /^[A-z0-9]+@ihealthsolutions.net$/.test(action.value)
            });
        
        case PASSWORD_KEYPRESS:
            return objectAssign({}, state, {
                errorMessage: "",                
                passwordInput: action.value,
                passwordFormatValid: action.value.length >= 6
            });
            
        default:
            return state
    }
}
