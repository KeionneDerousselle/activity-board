import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      id: `${props.name}-input`
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ value }, () => this.props.onChange(name, value));
  }

  render() {
    return (
      <input
        className="form-control"
        value={this.state.value}
        onChange={this.handleOnChange}
        name={this.props.name}
        aria-label={this.props.label}
        id={this.state.id}
        placeholder={this.props.placeholder}
        aria-describedby={this.props.labelDescribedBy}
      />
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelDescribedBy: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;