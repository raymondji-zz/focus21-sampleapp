import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage.js';
import AppsPage from './containers/AppsPage.js';
import LoginPage from './containers/LoginPage.js';

import AuthHelper from './businessLogic/authHelper.js';

export default (
  <Route path="/focus21-sampleapp/" component={App}>
    <IndexRoute component={AppsPage} onEnter={AuthHelper.requireAuth} />
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);