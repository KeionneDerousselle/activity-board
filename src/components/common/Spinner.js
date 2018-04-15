import React from 'react';
import { Spin, Icon } from 'antd';
import styled from 'react-emotion';

const StyledIcon = styled(Icon)({
  fontSize: 60
});

const Spinner = ({...props}) => {
  const icon = 
    <StyledIcon 
      type="loading"
      spin
    />;

  return(
    <Spin
      indicator={icon}
      {...props}
    />
  );
}; 

export default Spinner;
