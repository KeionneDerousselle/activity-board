import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Activities } from '../../src/components';
import { storiesOf } from '@storybook/react';
import activities from '../../src/api/activities';

storiesOf('Activities', module)
  .add('basic', () => <Activities activities={activities}/>);
