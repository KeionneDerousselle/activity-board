import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MainLayout } from '../layout';
import ActivityForm from './ActivityForm';
import { Row, Col, notification } from 'antd';
import { saveActivity } from './activityActions';

const mdSizing = {
  span: 16,
  offset: 4
};

const smSizing = {
  span: 22,
  offset: 1
};

class ManageActivity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activity: { ...props.activity }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activity.id !== nextProps.activity.id) {
      this.setState({ activity: { ...nextProps.activity } });
    }
  }

  handleFormOnChange = (name, value) => {
    let activity = { ...this.state.activity };
    activity[name] = value;
    return this.setState({ activity: activity });
  };

  handleSubmitSuccess = activityTitle => {
    notification['success']({
      message: 'Success!',
      description: `${activityTitle} was successfully saved.`,
      duration: 2
    });
  };

  handleSubmitFailed = () => {
    notification['error']({
      message: 'Error',
      description: 'This activity could not be saved. Please validate all fields and try again.',
      duration: 2
    });
  };

  handleFormOnSubmit = () => {
    const { activity } = this.state;
    this.props.actions.saveActivity(activity)
      .then(() => this.handleSubmitSuccess(activity.title))
      .catch(error => this.handleSubmitFailed());
  }

  render() {
    return (
      <MainLayout
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
              <ActivityForm
                activity={this.state.activity}
                onChange={this.handleFormOnChange}
                onSubmit={this.handleFormOnSubmit}
              />
            </Col>
          </Row>
        }
      />
    );
  }
}

ManageActivity.propTypes = {
  activity: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    saveActivity: PropTypes.func.isRequired
  }).isRequired
};

ManageActivity.contextTypes = {
  router: PropTypes.object
};

const getActivityById = (activities, id) =>
  activities.find(activity => activity.id == id);

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.match.params.id;
  let activity = {
    title: '',
    price: 0,
    description: '',
    rating: 0,
    type: '',
    tags: [],
  };

  const activities = state.activities.items;

  if (activityId && activities.length > 0) {
    activity = getActivityById(activities, activityId);
  }

  return {
    activity: activity
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ saveActivity }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageActivity);
