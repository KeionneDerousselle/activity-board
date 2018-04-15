import React from 'react';
import PropTypes from 'prop-types';

import '../styles/styles.css';
import styled from 'react-emotion';

import { Header, MainSideBar, Footer } from './layout';
import { Activities } from './activities';
import { FilterBar } from './common/filters';

import { Layout } from 'antd';
const { Content } = Layout;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchActivitiesIfNeeded } from './activities/activityActions';

const OuterLayout = styled(Layout)({
  height: '100%'
});

const InnerLayout = styled(Layout)({
  display: 'flex',
  flexDirection: 'column'
});

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

class App extends React.Component {
  componentDidMount() {
    this.props.actions.fetchActivitiesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activities !== this.props.activities) {
      this.props.actions.fetchActivitiesIfNeeded();
    }
  }

  render() {
    return (
      <OuterLayout>
        <MainSideBar>
          <FilterBar activityTypes={activityTypes} priceRanges={priceRanges} />
        </MainSideBar>
        <InnerLayout>
          <Header />
          <Content>
            <Activities activities={this.props.activities.items} />
          </Content>
          <Footer />
        </InnerLayout>
      </OuterLayout>
    );
  }
}

App.propTypes = {
  activities: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchActivitiesIfNeeded }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
