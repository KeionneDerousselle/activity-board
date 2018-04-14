import React from 'react';
import { css } from 'react-emotion';
import { Radio } from 'antd';
import PropType from 'prop-types';

import { filterGroupStyle } from './styles';

const RadioGroup = Radio.Group;

const radioButtonStyle = css`
color:white;
padding: 3px 0;
`;

const PriceFilter = ({ priceRanges, onPriceRangeChange, priceRangeValue }) => {
  const radioButtons = priceRanges
    .map((priceRange, i) =>
      <Radio
        className={radioButtonStyle}
        value={i}
        key={i}
      >{priceRange}
      </Radio>);

  return (
    <RadioGroup
      className={filterGroupStyle}
      onChange={onPriceRangeChange}
      value={priceRangeValue}
    >
      {radioButtons}
    </RadioGroup>);
};


PriceFilter.propTypes = {
  priceRanges: PropType.arrayOf(PropType.string).isRequired,
  priceRangeValue: PropType.number.isRequired,
  onPriceRangeChange: PropType.func.isRequired
};

export default PriceFilter;
