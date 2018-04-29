import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'react-emotion';
import { Row, Col, Icon } from 'antd';
import MainLayout from './MainLayout';

const lgSizing = {
  span: 12,
  offset: 6
};

const mdSizing = {
  span: 16,
  offset: 4
};

const smSizing = {
  span: 22,
  offset: 1
};

const flexClass = css({
  display: 'flex'
});

const headerClass = cx(flexClass, css({
  flexClass,
  alignItems: 'center',
  justifyContent: 'center'
}));

const closeClass = cx(flexClass, css({
  fontSize: 30,
  justifyContent: 'flex-end'
}));

const ActivityPageLayout = ({ content, isContentLoading, header, footer, title, closable, onClose }) => {
  const titleContent = 
    <div className={headerClass}>
      <h1>{title}</h1>
      
    </div>;
  
  const closeBar = 
    <div className={closeClass}>
      <Icon type="close" onClick={() => {if(onClose) onClose();}}/>
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
            lg={lgSizing}
            xl={lgSizing}
            xxl={lgSizing}
          >
            <Fragment>
              {closable && closeBar}
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
  footer: PropTypes.node,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

export default ActivityPageLayout;
