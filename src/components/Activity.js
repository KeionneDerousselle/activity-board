import React from 'react';
import PropTypes from 'prop-types';

const Activity = ({...activity}) => 
  <div>
    <div>{activity.title}</div>
    {activity.description || <div>{activity.description}</div> }
    <div>{activity.type}</div>
    <div>{activity.rating}</div>
    <div>{activity.price}</div>
  </div>;

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string.isRequired,
  tags: PropTypes.array,
  price: PropTypes.number
};

export default Activity;
