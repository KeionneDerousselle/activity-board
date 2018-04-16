import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'react-emotion';
import { fadeInDown, fadeInLeft } from 'react-animations';
import Activity from './Activity';
import { Row, Col } from 'antd';
import { createMediaQueryStyles, mobileBreakpoint } from './../common/utils/media';

const Div = styled.div({
  padding: 24,
  background: '#fff'
});

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const animationDelay = 0.3;

const mobileQuery = `@media (max-width: ${mobileBreakpoint}px)`;

const gutter = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32
};

const paddingStyle = createMediaQueryStyles(gutter,
  [{
    properties: ['paddingTop', 'paddingBottom'],
    modifer: v => v / 2
  }]
);

const ActivityCol = styled(Col)(({ delay }) => ({
  ...paddingStyle,
  opacity: 0,
  animation: `${fadeInDownAnimation} 1s ${delay}s forwards`,
  [mobileQuery]: {
    animation: `${fadeInLeftAnimation} 1s ${delay}s forwards`
  }
}));

class Activities extends React.Component {
  componentDidMount() {
    // this.props.actions.fetchActivitiesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.activities !== this.props.activities) {
    //   this.props.actions.fetchActivitiesIfNeeded();
    // }
  }

  render() {
    return (
      <Div>
        <Row gutter={gutter}>
          {
            this.props.activities.map((a, i) => {
              return (
                <ActivityCol
                  key={i}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={6}
                  delay={animationDelay * i}
                >
                  <Activity {...a} />
                </ActivityCol>
              );
            })
          }
        </Row>
      </Div>
    );
  }
}

Activities.propTypes = {
  activities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  activities: state.activities.items
});

export default connect(mapStateToProps)(Activities);
