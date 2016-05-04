import { combineReducers } from 'redux';
import loginAppState from './login.js';
import appsPageState from './appsPage.js';
import userAuthState from './login'

const rootReducer = combineReducers({
  appsPageState,
  loginAppState,
  userAuthState
});

export default rootReducer;
