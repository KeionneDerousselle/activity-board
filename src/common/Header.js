import React from 'react';
import { Layout } from 'antd';
const AntDHeader = Layout.Header;

const headerStyles = {
  backgroundColor: '#fff',
  padding: 0
};

const Header = () =>
  <AntDHeader style={headerStyles}/>;

export default Header;
