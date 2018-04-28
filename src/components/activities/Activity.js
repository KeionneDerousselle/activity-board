import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropsRoute from '../common/PropsRoute';
import { css } from 'react-emotion';
import { Row, Col } from 'antd';
import { MainLayout } from '../layout';
import ActivityDetails from './ActivityDetails';
import ManageActivity from './ManageActivity';

const mdSizing = {
  span: 16,
  offset: 4
};

const smSizing = {
  span: 22,
  offset: 1
};

const headerClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: { ...props.activity },
      activityIsFetching: props.activityIsFetching
    };
  }

  // getDerivedPropsFromState
  componentWillReceiveProps(nextProps) {
    if (this.props.activity !== nextProps.activity) {
      this.setState({ activity: { ...nextProps.activity } });
    }
    if (this.props.activityIsFetching !== nextProps.activityIsFetching) {
      this.setState({ activityIsFetching: nextProps.activityIsFetching });
    }
  }

  render() {
    const { activity, activityIsFetching } = this.state;
    const { tags } = this.props;
    let tagsArray = [];

    const tagsObj = tags.items.reduce((result, item) => {
      result[item.id] = item.name;
      return result;
    }, {});

    if (activity && activity.tags) {
      tagsArray = activity.tags.map(t => tagsObj[t]);
    }

    return (
      <MainLayout
        isContentLoading={!activity || activityIsFetching || !tags || tags.isFetching}
        content={
          <Row>
            <Col
              xs={smSizing}
              sm={smSizing}
              md={mdSizing}
              lg={mdSizing}
              xl={mdSizing}
              xxl={mdSizing}
            >
              <div>
                <div className={headerClass}>
                  <h1>{activity.title}</h1>
                </div>
                <Switch>
                  <Route
                    exact
                    path="/activity"
                    component={ManageActivity}
                  />
                  <Route
                    exact
                    path="/activity/edit/:id"
                    component={ManageActivity}
                  />
                  <PropsRoute
                    exact
                    path="/activity/:id"
                    tags={tagsArray}
                    img={activity.img}
                    price={activity.price}
                    description={activity.description}
                    rating={activity.rating}
                    component={ActivityDetails}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        }
      />
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object,
  activityIsFetching: PropTypes.bool.isRequired,
  tags: PropTypes.object.isRequired
};

const getActivityById = (activities, id) =>
  activities.find(activity => activity.id == id);

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.match.params.id;
  const activities = state.activities.items;
  const activity = getActivityById(activities, activityId);
  return {
    activityIsFetching: state.activities.isFetching,
    activity: activity,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(Activity);
