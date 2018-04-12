import React, { Fragment } from 'react';
import { Header } from '../common';
import activities from '../api/activities';
import Activities from './Activities';
import { Container } from 'reactstrap';

const App = () =>
  <Fragment>
    <Header />
    <Container>
      <Activities activities={activities} />
    </Container>
  </Fragment>;

export default App;
