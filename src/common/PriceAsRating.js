import React from 'react';
import PropTypes from 'prop-types';
import { convert } from './utils';

const priceAsRatingStyles = {
  fontSize: 17,
  color: 'rgba(0, 0, 0, 0.45)',
  display: 'inline-block',
  margin: 0,
  padding: 0
};

const PriceAsRating = ({ price, ...props }) => {
  const ratingNum = convert(price);
  let ratings = [];

  for (let i = 0; i < ratingNum; i++) {
    ratings.push(<div key={i} style={priceAsRatingStyles}>$</div>);
  }

  return (
    <div {...props}>
      {ratings}
    </div>
  );
};

PriceAsRating.propTypes = {
  price: PropTypes.number.isRequired
};

export default PriceAsRating;
