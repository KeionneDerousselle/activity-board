import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import App from '../App';

const history = createHashHistory();

const Routes = () =>
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>;

export default Routes;
