import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import MainSideBar from './MainSideBar';
import MainLayout from './MainLayout';
import { Layout } from 'antd';

const OuterLayout = styled(Layout)({
  height: '100%'
});

const SidebarLayout = ({ content, isContentLoading, sidebar, header, footer }) =>
  <OuterLayout>
    <MainSideBar>
      {sidebar}
    </MainSideBar>
    <MainLayout
      isContentLoading={isContentLoading}
      content={content}
      header={header}
      footer={footer}
    />
  </OuterLayout>;

SidebarLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isContentLoading: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node
};

export default SidebarLayout;
