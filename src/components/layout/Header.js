import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import MediaQuery from 'react-responsive';
import { Layout, Row, Col, Icon } from 'antd';
const AntDHeader = Layout.Header;

const headerStyles = css({
  padding: 0,
  background: '#f0f2f5',
  color: 'rgba(0, 0, 0, 0.65)',
  fontSize: 14,
});

const HomeIcon = styled(Icon)({
  fontSize: 26,
  cursor: 'pointer'
});

const Header = ({ children, history }) =>
  <AntDHeader
    className={headerStyles}
    mode="horizontal"
  >
    <Row type="flex" justify="space-around">
      <MediaQuery maxWidth={768}>
        <Col span={1} offset={1}>
          <HomeIcon type="home" onClick={() => history.push('/activities')} />
        </Col>
        <Col span={19}>
          {children}
        </Col>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <Col span={3}>
          <Link to="/activities">Activity Board</Link>
        </Col>
        <Col span={20}>
          {children}
        </Col>
      </MediaQuery>
    </Row>
  </AntDHeader>;

Header.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
