import React from 'react';
import PropTypes from 'prop-types';
// import { Button as ReactStrapButton} from 'reactstrap';
import { bootstrapSizes } from './utils';

const Button = ({ bootstrapSize, ...props }) =>
  // <ReactStrapButton 
  //   size={bootstrapSize}
  //   {...props}
  <div>sdsdf</div>;

Button.propTypes = {
  bootstrapSize: PropTypes.oneOf(bootstrapSizes)
};

export default Button;
