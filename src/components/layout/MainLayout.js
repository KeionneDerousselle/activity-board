import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { Header, Footer, Content as ContentContainer } from '../layout';
import { Layout } from 'antd';

const InnerLayout = styled(Layout)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
});

const MainLayout = ({content, isContentLoading, header, footer}) => {
  header = header || <Header />;
  footer = footer || <Footer />;
  return (
    <InnerLayout>
      {header}
      <ContentContainer isLoading={isContentLoading}>
        {content}
      </ContentContainer>
      {footer}
    </InnerLayout>
  );
}

MainLayout.propTypes = {
  content: PropTypes.node.isRequired,
  isContentLoading: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node
};

export default MainLayout;
