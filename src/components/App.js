import React from 'react';
import '../styles/styles.css';

import { Header } from '../common';
import activities from '../api/activities';
import Activities from './Activities';
import MainSideBar from './MainSideBar';
import ActivityFilters from './ActivityFilters';

import { Layout } from 'antd';
import FilterBar from './FilterBar';
const { Content, Footer } = Layout;

const outerLayoutStyle = {
  height: '100%'
};

const innerLayoutStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const contentStyles = {
  margin: '24px 16px 0',
  overflow: 'initial',
  flex: '1 0 auto'
};

const footerStyles = {
  textAlign: 'center',
  flexShrink: 0
};

const App = () =>
  <Layout style={outerLayoutStyle}>
    <Header />
    <MainSideBar>
      <FilterBar/>
    </MainSideBar>
    <Layout style={innerLayoutStyle}>
      <Content style={contentStyles}>
        <Activities activities={activities} />
      </Content>
      <Footer style={footerStyles}>
        Created by Keionne Derouselle
      </Footer>
    </Layout>
  </Layout>;

export default App;
