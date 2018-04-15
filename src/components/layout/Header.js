import React from 'react';
import { css } from 'emotion';

import { Layout, Row, Col, Input } from 'antd';
const AntDHeader = Layout.Header;
const { Search } = Input;

const headerStyles = css({
  padding: 0,
  background: '#f0f2f5',
  color: 'rgba(0, 0, 0, 0.65)',
  fontSize: 14,
});

const Header = () =>
  <AntDHeader
    className={headerStyles}
    mode="horizontal"
  >
    <Row type="flex" justify="space-around">
      <Col span={22}>
        <Search
          placeholder="Search Activities"
          onSearch={value => console.log(value)}
        />
      </Col>
    </Row>
  </AntDHeader>;

export default Header;
