import React from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity';

import {
  CardDeck
} from 'reactstrap';

const Activities = ({ activities }) =>
  <CardDeck>
    {
      activities.map((a, i) => <Activity key={i} {...a} />)
    }
  </CardDeck>;

Activities.propTypes = {
  activities: PropTypes.array.isRequired
};

export default Activities;
