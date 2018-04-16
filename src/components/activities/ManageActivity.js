import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityForm from './ActivityForm';
import { Row, Col } from 'antd';

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

  handleFormOnSubmit = () => {
    console.log('Submitted');
  }

  render() {
    return (
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
    );
  }
}

ManageActivity.propTypes = {
  activity: PropTypes.object.isRequired
};

ManageActivity.contextTypes = {
  router: PropTypes.object
};

const getActivityById = (activities, id) =>
  activities.find(activity => activity.id == id);

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.match.params.id;
  let activity = {
    id: 'you will create an activity',
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

export default connect(mapStateToProps)(ManageActivity);
