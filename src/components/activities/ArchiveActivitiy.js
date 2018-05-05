import React from 'react';
import PropTypes from 'prop-types';
import ArchiveForm from './ArchiveForm';

class ArchiveActivity extends React.Component {
  state = {
    saving: false
  }

  handleOnSubmit = () => {
    alert('Submitted!');
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
