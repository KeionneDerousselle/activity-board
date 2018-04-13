import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
const { Sider } = Layout;

const mainSideBarStyles = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0 
};

const MainSideBar = ({children, ...props}) => 
  <Sider style={mainSideBarStyles} {...props}>
    {children}
  </Sider>;

MainSideBar.propTypes = {
  children: PropTypes.node
};

export default MainSideBar;
