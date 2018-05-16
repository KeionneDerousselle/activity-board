import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveActivity } from './actions/activity.actions';
import ArchiveForm from './ArchiveForm';
import { Modal, notification } from 'antd';
const confirm = Modal.confirm;


class ArchiveActivity extends React.Component {
  state = {
    saving: false
  }

  handleOnSubmit = (archiveDate, archivedUntilText, displayDate) => {
    const { activity } = this.props;

    confirm({
      title: 'Are you sure?',
      content: `You are about to archive ${activity.title} ${archivedUntilText}. This means ${activity.title} will not be shown on the activities dashboard or be suggested until ${displayDate}.`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => this.archiveActivity(archiveDate),
      onCancel() {
        // TODO: handle clear form
        alert('Cancel');
      },
    });
  }
  redirect = () => {
    const { activity, history } = this.props;
    history.push(`/activity/${activity.id}`);
  }

  archiveActivity = archiveDate => {
    const { activity, saveActivity } = this.props;
    activity.archivedUntil = archiveDate;
    this.setState({ saving: true });

    saveActivity(activity)
      .then(() => this.handleSaveArchiveSuccess())
      .catch(() => this.handleSaveArchiveFailed());
  };

  handleSaveArchiveSuccess = () => {
    const { activity: { title } } = this.props;
    this.setState({ saving: false });
    this.redirect();
    notification.success({
      message: 'Success!',
      description: `${title} was successfully archived.`,
      duration: 4
    });
  };

  handleSaveArchiveFailed = () => {
    this.setState({ saving: false });
    notification.error({
      message: 'Error',
      description: 'This activity could not be archived. Please validate all fields and try again.',
      duration: 4
    });
  };

  render() {
    return (
      <ArchiveForm
        activity={this.props.activity}
        onSubmit={this.handleOnSubmit}
      />
    );
  }
}

ArchiveActivity.propTypes = {
  activity: PropTypes.object.isRequired,
  saveActivity: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  saveActivity
};

export default withRouter(connect(null, mapDispatchToProps)(ArchiveActivity));
