import React, { Fragment } from 'react';
import { Header } from '../common';
import activities from '../api/activities';
import Activity from './Activity';

const App = () =>
  <Fragment>
    <Header />
    {
      activities.map((a, i) => <Activity key={i} {...a} />)
    }
  </Fragment>;

export default App;
