import { combineReducers } from 'redux';
import loginAppState from './login';
import appsPageState from './appsPage';
import userAuthState from './userAuthState';

const rootReducer = combineReducers({
  appsPageState,
  loginAppState,
  userAuthState
});

export default rootReducer;
