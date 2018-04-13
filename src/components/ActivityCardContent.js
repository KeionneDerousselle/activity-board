import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

const ActivityCardContent = ({ rating, description, price }) =>
  <div>
    <div>
      <Rate 
        allowHalf 
        disabled 
        defaultValue={rating} 
      />
      <div>{price}</div>
    </div>
    <div>
      <p>
        {description}
      </p>
    </div>
  </div>;

ActivityCardContent.propTypes = {
  rating: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number
};

export default ActivityCardContent;
