import React from 'react';
import '../styles/styles.css';

import { Route, Switch } from 'react-router-dom';
import { ActivitiesDashboard, ManageActivity, Activity } from './activities';

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
      path="/activity/:id"
      component={Activity}
    />    
    <Route
      path="/activity/"
      component={ManageActivity}
    />
    <Route
      exact
      path="/"
      component={ActivitiesDashboard}
    />
  </Switch>;

export default App;
