import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Row, Col, Rate, Tooltip } from 'antd';
import { PriceAsRating } from '../common';
import { toCurrency } from '../common/utils';

const PriceCol = styled(Col)({
  textAlign: 'right'
});

const Rating = styled(Rate)({
  fontSize: 17
});

const ActivityCardContent = ({ rating, description, price }) => {
  const currency = toCurrency(price);

  return (
    <div>
      <Row type="flex" align="middle">
        <Col span={20}>
          <Rating
            allowHalf
            disabled
            defaultValue={rating}
          />
        </Col>
        <PriceCol span={4}>
          <Tooltip title={currency || 'Free'} placement="top">
            <PriceAsRating price={price} />
          </Tooltip>
        </PriceCol>
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
