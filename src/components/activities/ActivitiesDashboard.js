import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { SidebarLayout } from '../layout';
import { FilterBar } from '../common/filters';
import Activities from './Activities';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActivitiesIfNeeded } from '../activities/activityActions';

const activityTypes = [
  'Outdoor',
  'Indoor',
  'Active'
];

const priceRanges = [
  'Any Price',
  '$10 and below',
  '$11 to $50',
  '$51 to $100',
  '$100 to $200',
  '$200 and up'
];

class ActivitiesDashboard extends React.Component {
  componentDidMount() {
    this.props.actions.fetchActivitiesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activities !== this.props.activities) {
      this.props.actions.fetchActivitiesIfNeeded();
    }
  }

  render() {
    const { activities } = this.props;

    return (
        <SidebarLayout
          sidebar={<FilterBar activityTypes={activityTypes} priceRanges={priceRanges} />}
          content={<Activities activities={activities.items} />}
          isContentLoading={activities.isFetching}
        />
    );
  }
}

ActivitiesDashboard.propTypes = {
  activities: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchActivitiesIfNeeded }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard);
