import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ActivityForm from './ActivityForm';
import { notification } from 'antd';
import { saveActivity } from './activityActions';

class EditActivity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activity: props.activity ? 
        { ...props.activity } : 
        {
          title: '',
          img: '',
          description: '',
          price: 0,
          rating: 0,
          tags: []
        },
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activity !== nextProps.activity) {
      this.setState({ activity: { ...nextProps.activity } });
    }
  }

  handleFormOnChange = (name, value) => {
    let activity = { ...this.state.activity };
    activity[name] = value;
    return this.setState({ activity: activity });
  };

  redirect = () => {
    this.props.history.push('/activities');
  }

  handleSubmitSuccess = activityTitle => {
    this.setState({ saving: false });
    this.redirect();
    notification.success({
      message: 'Success!',
      description: `${activityTitle} was successfully saved.`,
      duration: 4
    });
  };

  handleSubmitFailed = () => {
    this.setState({ saving: false });
    notification.error({
      message: 'Error',
      description: 'This activity could not be saved. Please validate all fields and try again.',
      duration: 4
    });
  };

  handleFormOnSubmit = () => {
    this.setState({ saving: true });
    const { activity } = this.state;
    this.props.actions.saveActivity(activity)
      .then(() => this.handleSubmitSuccess(activity.title))
      .catch(error => this.handleSubmitFailed(error));
  }

  handleImageUploading = () => {
    this.setState({ saving: true });
  }

  handleImageUploadSucceeded = () => {
    this.setState({ saving: false });
    notification.success({
      message: 'Success!',
      description: 'Image was uploaded successfully.',
      duration: 4
    });
  }

  handleImageUploadFailed = () => {
    this.setState({ saving: false });
    notification.error({
      message: 'Error',
      description: 'Image upload failed.',
      duration: 4
    });
  }

  render() {
    return (
      <ActivityForm
        activity={this.state.activity}
        tags={this.props.tags}
        onChange={this.handleFormOnChange}
        onSubmit={this.handleFormOnSubmit}
        saving={this.state.saving}
        onImageUploading={this.handleImageUploading}
        onImageUploadSucceeded={this.handleImageUploadSucceeded}
        onImageUploadFailed={this.handleImageUploadFailed}
        imageUploadUrl="//jsonplaceholder.typicode.com/posts/"
      />
    );
  }
}

EditActivity.propTypes = {
  activity: PropTypes.object,
  tags: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    saveActivity: PropTypes.func.isRequired
  }).isRequired
};

EditActivity.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ saveActivity }, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(EditActivity));
