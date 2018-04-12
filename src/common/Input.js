import React from 'react';
import PropTypes from 'prop-types';
import { Input as ReactStrapInput } from 'reactstrap';
import { bootstrapSizes } from './utils';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      id: `${props.name}-input`
    };
  }

  handleOnChange = (event, onChange) => {
    const { name, value } = event.target;
    this.setState({ value }, () => onChange(name, value));
  }

  render() {
    const { label, labelDescribedBy, readonlyRenderedAsPlainText, children, onChange, ...props } = this.props;
    return (
      <ReactStrapInput
        value={this.state.value}
        onChange={ event => this.handleOnChange(event, onChange)}
        aria-label={label}
        id={this.state.id}
        aria-describedby={labelDescribedBy}
        plaintext={readonlyRenderedAsPlainText}
        {...props}
      >
        {children}
      </ReactStrapInput>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  labelDescribedBy: PropTypes.string,
  readonlyRenderedAsPlainText: PropTypes.bool,
  bootstrapSize: PropTypes.oneOf(bootstrapSizes),
  value: PropTypes.string
};

export default Input;
