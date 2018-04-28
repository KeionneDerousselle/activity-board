import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ActivityForm from './ActivityForm';
import { notification } from 'antd';
import { saveActivity } from './activityActions';

class ManageActivity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activity: { ...props.activity },
      saving: false,
      title: props.activity.id ? props.activity.title : 'Create An Activity'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activity.id !== nextProps.activity.id) {
      this.setState({
        activity: { ...nextProps.activity },
        title: nextProps.activity.id ? nextProps.activity.title : 'Create An Activity'
      });
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
    const tags = this.props.tags.items.reduce((result, item) => {
      result[item.id] = item.name;
      return result;
    }, {});

    return (
      <div>
        <div className="headerClass">
          <h1>{this.state.title}</h1>
        </div>
        <ActivityForm
          activity={this.state.activity}
          tags={tags}
          onChange={this.handleFormOnChange}
          onSubmit={this.handleFormOnSubmit}
          saving={this.state.saving}
          onImageUploading={this.handleImageUploading}
          onImageUploadSucceeded={this.handleImageUploadSucceeded}
          onImageUploadFailed={this.handleImageUploadFailed}
          imageUploadUrl="//jsonplaceholder.typicode.com/posts/"
        />
      </div>
    );
  }
}

ManageActivity.propTypes = {
  activity: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    saveActivity: PropTypes.func.isRequired
  }).isRequired
};

ManageActivity.contextTypes = {
  router: PropTypes.object
};

const getActivityById = (activities, id) =>
  activities.find(activity => activity.id === id);

const mapStateToProps = (state, ownProps) => {
  const activityId = parseInt(ownProps.match.params.id, 10);
  let activity = {
    title: '',
    price: 0,
    description: '',
    rating: 0,
    tags: [],
  };

  const activities = state.activities.items;

  if (activityId && activities.length > 0) {
    activity = getActivityById(activities, activityId);
  }

  return {
    activity: activity,
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ saveActivity }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageActivity));
