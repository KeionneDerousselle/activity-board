import React from 'react';
import styled from 'react-emotion';

import { Layout } from 'antd';
const AntdFooter = Layout.Footer;

const StyledFooter = styled(AntdFooter)({
  textAlign: 'center',
  flexShrink: 0
});

const Footer = () =>
  <StyledFooter>
    Created by Keionne and Darrius
  </StyledFooter>;


export default Footer;
