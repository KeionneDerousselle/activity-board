import React from 'react';
import PropTypes from 'prop-types';
import ArchiveForm from './ArchiveForm';
import { Modal } from 'antd';
const confirm = Modal.confirm;


class ArchiveActivity extends React.Component {
  state = {
    saving: false
  }

  handleOnSubmit = (archivalDate, archivedUntilText, displayDate) => {
    const { activity } = this.props;
    confirm({
      title: 'Are you sure?',
      content: `You are about to archive ${activity.title} ${archivedUntilText}. This means ${activity.title} will not be shown on the activities dashboard or be suggested until ${displayDate}.`,
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        alert('OK');
      },
      onCancel() {
        alert('Cancel');
      },
    });
  }

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
  activity: PropTypes.object.isRequired
};

export default ArchiveActivity;
