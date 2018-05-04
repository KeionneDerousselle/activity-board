import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import PropsRoute from '../common/PropsRoute';
import { ActivityPageLayout } from '../layout';
import ViewActivity from './ViewActivity';
import EditActivity from './EditActivity';
import ArchiveActivity from './ArchiveActivitiy';

class ActivityDetails extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // TODO: There's gotta be a better way to do this.
    if (prevState !== nextProps) {
      return {
        activity: { ...nextProps.activity },
        activityIsFetching: nextProps.activityIsFetching
      };
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

  navigateToEdit = () => {
    const { history, activity } = this.props;
    history.push(`/activity/${activity.id}/edit`);
  }

  navigateToArchive = () => {
    const { history, activity } = this.props;
    history.push(`/activity/${activity.id}/archive`);
  }

  navigateToDashboard = () => {
    this.props.history.push('/activities');
  }

  navigateToView = () => {
    const { history, activity } = this.props;
    history.push(`/activity/${activity.id}`);
  }

  onViewPage = () => {
    const { activity } = this.props;
    return !activity || !activity.id || this.props.location.pathname.endsWith(`${activity.id}`);
  }

  handleEditClicked = () => {
    this.navigateToEdit();
  }

  handleEditPageClosed = () => {
    this.navigateToView();
  }

  handleArchiveClicked = () => {
    this.navigateToArchive();
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

    const onClose = this.onViewPage() ? this.navigateToDashboard : this.navigateToView;

    return (
      <ActivityPageLayout
        isContentLoading={!activity || activityIsFetching || !tags || tags.isFetching}
        title={activity.title}
        closable
        onClose={onClose}
        content={
          <Switch>
            <PropsRoute
              exact
              path="/activity/:id"
              tags={tagsArray}
              activity={activity}
              onEditClick={this.handleEditClicked}
              onArchiveClick={this.handleArchiveClicked}
              component={ViewActivity}
            />
            <PropsRoute
              exact
              path="/activity/:id/edit"
              tags={tagsObj}
              activity={activity}
              component={EditActivity}
            />
            <PropsRoute
              exact
              path="/activity/:id/archive"
              activity={activity}
              component={ArchiveActivity}
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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

export default withRouter(connect(mapStateToProps)(ActivityDetails));
