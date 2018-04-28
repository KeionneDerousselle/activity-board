import React from 'react';
import '../styles/styles.css';

import { Route, Switch } from 'react-router-dom';
import { ActivitiesDashboard, ActivityDetails, CreateActvity } from './activities';

const App = () =>
  <Switch>
    <Route
      exact
      path="/home"
      component={ActivitiesDashboard} 
    />
    <Route
      exact
      path="/activities"
      component={ActivitiesDashboard} 
    />
    <Route
      exact
      path="/activity/create"
      component={CreateActvity}
    />
    <Route 
      path="/activity/:id"
      component={ActivityDetails}
    />
    <Route
      exact
      path="/"
      component={ActivitiesDashboard}
    />
  </Switch>;

export default App;
