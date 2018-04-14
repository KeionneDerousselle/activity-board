import React from 'react';

import '../styles/styles.css';
import styled from 'react-emotion';

import { Header, MainSideBar, Footer} from './layout';
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

const StyledContent = styled(Content)({
  margin: '24px 16px 0',
  overflow: 'initial',
  flex: '1 0 auto'
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
    <Header />
    <MainSideBar>
      <FilterBar activityTypes={activityTypes} priceRanges={priceRanges}/>
    </MainSideBar>
    <InnerLayout>
      <StyledContent>
        <Activities activities={activities} />
      </StyledContent>
      <Footer />
    </InnerLayout>
  </OuterLayout>;

export default App;
