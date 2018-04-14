import React from 'react';

import '../styles/styles.css';
import styled from 'react-emotion';

import { Header } from '../common';
import activities from '../api/activities';
import Activities from './Activities';
import MainSideBar from './MainSideBar';
import FilterBar from './FilterBar';
import Footer from './Footer';

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

const App = () =>
  <OuterLayout>
    <Header />
    <MainSideBar>
      <FilterBar/>
    </MainSideBar>
    <InnerLayout>
      <StyledContent>
        <Activities activities={activities} />
      </StyledContent>
      <Footer />
    </InnerLayout>
  </OuterLayout>;

export default App;
