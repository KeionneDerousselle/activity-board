import React from 'react';
import { css } from 'emotion';

import { Layout } from 'antd';
const AntDHeader = Layout.Header;

const headerStyles = css({
  backgroundColor: '#fff',
  padding: 0
});

const Header = () =>
  <AntDHeader className={headerStyles}/>;

export default Header;
