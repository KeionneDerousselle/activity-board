import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

  render() {
    return (
      <div>
        {this.state.activity.id}
      </div>
    );
  }
}

ManageActivity.propTypes = {
  activity: PropTypes.object.isRequired
};

ManageActivity.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.match.params.id;
  let activity = {
    id: 'you will create an activity',

  };

  if (activityId && state.activities.items.length > 0) {
    activity = {
      id: activityId
    };
  }

  return {
    activity: activity
  };
};

export default connect(mapStateToProps)(ManageActivity);
