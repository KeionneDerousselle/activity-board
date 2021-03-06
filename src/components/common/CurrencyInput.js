import React from 'react';
import PropTypes from 'prop-types';
import { toCurrency, toNumber } from './utils';
import { InputNumber } from 'antd';

class CurrencyInput extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.price !== nextProps.price) return { price: toCurrency(nextProps.price) };
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      price: toCurrency(props.price)
    };
  }

  handlePriceChange = price => this.setState({ price: price });

  handlePriceOnFocus = () => {
    this.setState({ price: toNumber(this.state.price) });
  }

  handlePriceOnBlur = () => {
    this.setState({ price: toCurrency(this.state.price) });
    this.props.onPriceChange(this.props.name, this.state.price);
  }

  render() {
    const { name, ...props } = this.props;
    return (
      <InputNumber
        name={name}
        onChange={this.handlePriceChange}
        onBlur={this.handlePriceOnBlur}
        onFocus={this.handlePriceOnFocus}
        value={this.state.price}
        {...props}
      />
    );
  }
}

CurrencyInput.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChange: PropTypes.func.isRequired
};

export default CurrencyInput;
