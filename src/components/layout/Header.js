import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { Layout } from 'antd';
const AntDHeader = Layout.Header;

const headerStyles = css({
  padding: 0,
  background: '#f0f2f5',
  color: 'rgba(0, 0, 0, 0.65)',
  fontSize: 14,
});

const Header = ({ children }) =>
  <AntDHeader
    className={headerStyles}
    mode="horizontal"
  >
    {children}
  </AntDHeader>;

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
