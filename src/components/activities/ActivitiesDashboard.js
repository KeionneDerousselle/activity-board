import React from 'react';
import PropTypes from 'prop-types';

import { MainLayout } from '../layout';
import { FilterBar } from '../common/filters';
import VisibleActivities from './VisibleActivities';
import { Input } from 'antd';
const { Search } = Input;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByTitle } from './actions/activities.visibility.actions';

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
  handleSearchByTitle = value => {
    this.props.actions.searchByTitle(value);
  }

  render() {
    const { activities } = this.props;

    return (
      <MainLayout
        header={
          <Search
            placeholder="Search Activities"
            onSearch={this.handleSearchByTitle}
          />
        }
        sidebar={<FilterBar activityTypes={activityTypes} priceRanges={priceRanges} />}
        content={<VisibleActivities />}
        isContentLoading={!activities || activities.isFetching}
      />
    );
  }
}

ActivitiesDashboard.propTypes = {
  activities: PropTypes.object.isRequired,
  actions: PropTypes.shape({ searchByTitle: PropTypes.func.isRequired }).isRequired
};

const mapStateToProps = state => ({
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ searchByTitle }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard);
