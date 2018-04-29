import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { Header, Footer, Content as ContentContainer } from '../layout';
import { Layout } from 'antd';

const InnerLayout = styled(Layout)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0
});

const Div = styled.div({
  flex: '1 0 auto'
});

const MainLayout = ({ content, isContentLoading, header, footer }) => {
  return (
    <InnerLayout>
      <Div>
        <Header>
          {header}
        </Header>
        <ContentContainer isLoading={isContentLoading}>
          {content}
        </ContentContainer>
      </Div>
      <Footer>
        {footer}
      </Footer>
    </InnerLayout>
  );
};

MainLayout.propTypes = {
  content: PropTypes.node.isRequired,
  isContentLoading: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node
};

export default MainLayout;
