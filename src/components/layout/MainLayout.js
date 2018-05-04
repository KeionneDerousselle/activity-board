import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import MainSideBar from './MainSideBar';
import { Header, Footer, Content as ContentContainer } from '../layout';
import { Layout } from 'antd';

const OuterLayout = styled(Layout)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0
});

const flexColumn = css({
  flex: '1 0 auto'
});

const MainLayout = ({ content, isContentLoading, header, footer, sidebar }) => {
  const layoutSider =
    <MainSideBar>
      {sidebar}
    </MainSideBar>;

  const layoutContent =
    <ContentContainer isLoading={isContentLoading}>
      {content}
    </ContentContainer>;

  const inner = sidebar ?
    <Layout className={flexColumn}>
      {layoutSider}
      {layoutContent}
    </Layout> :
    <div className={flexColumn}>
      {layoutContent}
    </div>;

  return (
    <OuterLayout>
      <Header>
        {header}
      </Header>
      {inner}
      <Footer>
        {footer}
      </Footer>
    </OuterLayout>
  );
};

MainLayout.propTypes = {
  content: PropTypes.node.isRequired,
  isContentLoading: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node,
  sidebar: PropTypes.node,
};

export default MainLayout;
