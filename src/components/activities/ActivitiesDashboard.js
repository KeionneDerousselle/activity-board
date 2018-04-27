import React from 'react';
import PropTypes from 'prop-types';

import { SidebarLayout } from '../layout';
import { FilterBar } from '../common/filters';
import Activities from './Activities';
import { Row, Col, Input } from 'antd';
const { Search } = Input;

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
  render() {
    const { activities } = this.props;

    return (
      <SidebarLayout
        header={
          <Row type="flex" justify="space-around">
            <Col span={22}>
              <Search
                placeholder="Search Activities"
                onSearch={value => console.log(value)}
              />
            </Col>
          </Row>
        }
        sidebar={<FilterBar activityTypes={activityTypes} priceRanges={priceRanges} />}
        content={<Activities activities={activities.items} />}
        isContentLoading={!activities || activities.isFetching}
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