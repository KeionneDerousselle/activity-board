import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Activities from './Activities';

class VisibleActivities extends React.Component {
  static getDerviedStateFromProps(nextProps, prevState) {
    let newState = {...prevState};

    if(prevState.activities !== nextProps.activities) {
      newState = {
        ...newState,
        activities: nextProps.activities
      };
    }

    if(prevState.activityFilters !== nextProps.activityFilters) {
      newState = {
        ...newState,
        activityFilters: nextProps.activityFilters
      };
    }

    return newState;
  }

  constructor(props) {
    super(props);

    this.state = {
      activities: [...props.activities]
    };
  }

  getFilteredActivities = () => {
    const { activities } = this.state;
    const { activityFilters } = this.props;

    let filtered = [...activities];

    if(activityFilters.title && activityFilters.title.length > 0) {
      filtered = activities.filter(a => a.title.toLocaleLowerCase().includes(activityFilters.title.toLocaleLowerCase()));
    }

    return filtered;
  }

  render() {
    const filtered = this.getFilteredActivities();
    return(
      <Activities activities={filtered} />
    );
  }
}

VisibleActivities.propTypes = {
  activities: PropTypes.array.isRequired,
  activityFilters: PropTypes.object.isRequired
};

const mapDispatchToProps = state => ({
  activities: state.activities.items,
  activityFilters: state.activityFilters
});

export default connect(mapDispatchToProps)(VisibleActivities);
