import React from 'react';

import '../styles/styles.css';
import styled from 'react-emotion';

import { Header, MainSideBar, Footer } from './layout';
import activities from '../api/activities';
import { Activities } from './activities';
import { FilterBar } from './common/filters';

import { Layout } from 'antd';
const { Content } = Layout;

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

const App = () =>
  <OuterLayout>
    <MainSideBar>
      <FilterBar activityTypes={activityTypes} priceRanges={priceRanges} />
    </MainSideBar>
    <InnerLayout>
      <Header />
      <Content>
        <Activities activities={activities} />
      </Content>
      <Footer />
    </InnerLayout>
  </OuterLayout>;

export default App;
