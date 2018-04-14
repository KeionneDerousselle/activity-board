import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
const { Sider } = Layout;

const mainSideBarStyles = {
  overflow: 'auto',
  height: '100vh',
  left: 0
};

class MainSideBar extends React.Component {
  handleCollapse = () => {
    console.log('It\'s collapsed');
    // TODO: Notify parent component or header that the filters should appear there instead
  };

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Sider
        trigger={null}
        breakpoint="md"
        collapsedWidth="0"
        collapsible
        onCollapse={this.handleCollapse}
        style={mainSideBarStyles}
        {...otherProps}
      >
        {children}
      </Sider>

    );
  }
}

MainSideBar.propTypes = {
  children: PropTypes.node
};

export default MainSideBar;
