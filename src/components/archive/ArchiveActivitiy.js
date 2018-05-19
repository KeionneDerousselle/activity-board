import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import { PropsRoute, ConditionalRoute } from '../common';
import { ActivityPageLayout } from '../layout';
import EditArchive from './EditArchive';
import ViewArchive from './ViewArchive';

class ArchiveActivity extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activity !== nextProps.activity) {
      return {
        activity: { ...nextProps.activity }
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      activity: props.activity,
    };
  }

  navigateToEdit = () => {
    const editArchiveUrl = this.getEditArchiveUrl();
    this.props.history.push(editArchiveUrl);
  }

  getEditArchiveUrl = () => {
    const { activity: { id } } = this.props;
    return `/activity/${id}/archive/edit`;
  }

  navigateToView = () => {
    const { history, activity: { id } } = this.props;
    history.push(`/activity/${id}/archive/`);
  }

  handleOnClose = () => console.log('Closed!');

  render() {
    const { activityIsFetching } = this.props;
    const { activity } = this.state;
    const title = activity ? activity.title : '';
    const date = activity ? activity.archivedUntil : '';
    const editUrl = activity ? this.getEditArchiveUrl() : '';

    return (
      <ActivityPageLayout
        isContentLoading={!activity || activityIsFetching}
        title={title}
        closable
        onClose={this.handleOnClose}
        content={
          <Switch>
            <ConditionalRoute
              exact
              path="/activity/:id/archive"
              archiveDate={date}
              onEdit={this.navigateToEdit}
              condition={() => date ? true : false}
              component={ViewArchive}
              redirect={editUrl}
            />
            <PropsRoute
              exact
              path="/activity/:id/archive/edit"
              activity={activity}
              component={EditArchive}
            />
          </Switch>
        }
      />
    );
  }
}

ArchiveActivity.propTypes = {
  activity: PropTypes.object,
  activityIsFetching: PropTypes.bool,
  history: PropTypes.object.isRequired
};

const getActivityById = (activities, id) =>
  activities.find(activity => activity.id == id);

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.match.params.id;
  const activities = state.activities.items;
  const activity = getActivityById(activities, activityId);

  return {
    activityIsFetching: state.activities.isFetching,
    activity: activity
  };
};

export default withRouter(connect(mapStateToProps)(ArchiveActivity));
