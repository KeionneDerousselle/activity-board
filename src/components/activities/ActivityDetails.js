import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropsRoute from '../common/PropsRoute';
import { ActivityPageLayout } from '../layout';
import ViewActivity from './ViewActivity';
import EditActivity from './EditActivity';

class ActivityDetails extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activity !== nextProps.activity) {
      return { activity: { ...nextProps.activity } };
    }

    if (prevState.activityIsFetching !== nextProps.activityIsFetching) {
      return { activityIsFetching: nextProps.activityIsFetching };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      activity: { ...props.activity },
      activityIsFetching: props.activityIsFetching
    };
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
      <ActivityPageLayout
        isContentLoading={!activity || activityIsFetching || !tags || tags.isFetching}
        title={activity.title}
        content={
          <Switch>
            <PropsRoute
              exact
              path="/activity/:id"
              tags={tagsArray}
              activity={activity}
              component={ViewActivity}
            />
            <PropsRoute
              exact
              path="/activity/:id/edit"
              tags={tagsObj}
              activity={activity}
              component={EditActivity}
            />
          </Switch>
        }
      />
    );
  }
}

ActivityDetails.propTypes = {
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

export default connect(mapStateToProps)(ActivityDetails);
