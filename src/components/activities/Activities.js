import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Activity from './Activity';
import { Row, Col } from 'antd';

const Div = styled.div({
  padding: 24,
  background: '#fff'
});

const ActivityCol = styled(Col)({
  paddingTop: 12,
  paddingBottom: 12
});

const gutter = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32
};

const Activities = ({ activities }) =>
  <Div>
    <Row gutter={gutter}>
      {
        activities.map((a, i) => {
          return (
            <ActivityCol
              key={i}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
            >
              <Activity {...a} />
            </ActivityCol>
          );
        })
      }
    </Row>
  </Div>;

Activities.propTypes = {
  activities: PropTypes.array.isRequired
};

export default Activities;
