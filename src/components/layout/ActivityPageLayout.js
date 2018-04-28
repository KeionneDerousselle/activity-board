import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Row, Col } from 'antd';
import MainLayout from './MainLayout';

const mdSizing = {
  span: 16,
  offset: 4
};

const smSizing = {
  span: 22,
  offset: 1
};

const headerClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const ActivityPageLayout = ({ content, isContentLoading, header, footer, title }) => {
  const titleContent = 
    <div className={headerClass}>
      <h1>{title}</h1>
    </div>;

  return (
    <MainLayout
      isContentLoading={isContentLoading}
      header={header}
      content={
        <Row>
          <Col
            xs={smSizing}
            sm={smSizing}
            md={mdSizing}
            lg={mdSizing}
            xl={mdSizing}
            xxl={mdSizing}
          >
            <Fragment>
              {title && titleContent}
              {content}
            </Fragment>
          </Col>
        </Row>
      }
      footer={footer}
    />
  );
}
ActivityPageLayout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  isContentLoading: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node
};

export default ActivityPageLayout;
