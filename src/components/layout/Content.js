import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
const AntDContent = Layout.Content;

import { css } from 'react-emotion';
import { Spinner } from '../common';

const loadingClass = css({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
});

const Content = ({ isLoading, children, ...props }) => {
  const classNames = isLoading ? loadingClass : '';
  const content = isLoading ? <Spinner /> : children;
  return(
    <AntDContent
      className={classNames}
      {...props}
    >
      {content}
    </AntDContent>
  );
};

Content.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Content;
