import React from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity';
import { Row, Col } from 'antd';

const activitiesContainerStyles = {
  padding: 24,
  background: '#fff'
};

const gutter = {
  xs: 8,
  sm: 16, 
  md: 24, 
  lg: 32 
};

const Activities = ({ activities }) =>
  <div style={activitiesContainerStyles}>
    <Row gutter={gutter}>
      {
        activities.map((a, i) => {
          return (
            <Col
              key={i}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
            >
              <Activity {...a} />
            </Col>
          );
        })
      }
    </Row>
  </div>;

Activities.propTypes = {
  activities: PropTypes.array.isRequired
};

export default Activities;
