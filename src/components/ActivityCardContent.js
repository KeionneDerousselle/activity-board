import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Rate, Tooltip } from 'antd';
import { PriceAsRating } from '../common';
import { toCurrency } from '../common/utils';

const priceDivStyles = {
  textAlign: 'right'
};

const ratingStyles = {
  fontSize: 17
};

const ActivityCardContent = ({ rating, description, price }) => {
  const currency = toCurrency(price);

  return (
    <div>
      <Row type="flex" align="middle">
        <Col span={20}>
          <Rate
            allowHalf
            disabled
            defaultValue={rating}
            style={ratingStyles}
          />
        </Col>
        <Col span={4} style={priceDivStyles}>
          <Tooltip title={currency || 'Free'} placement="top">
            <PriceAsRating price={price} />
          </Tooltip>
        </Col>
      </Row>
      <div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

ActivityCardContent.propTypes = {
  rating: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number
};

export default ActivityCardContent;
