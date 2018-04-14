import React, { PureComponent } from 'react';
// import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Rate, Form, Checkbox, Row, Col, Radio } from 'antd';
import styled, {css} from 'react-emotion';
import PropTypes from 'prop-types';
import PriceFilter from './FilterBarForm/PriceFilter';
import ActivityTypeFilter from './FilterBarForm/ActivityTypeFilter';

import {filterGroupStyle} from './FilterBarForm/styles';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const Container = styled.div`
  margin-left: .8rem;
`;

const FilterByTitle = styled.h1`
  color:white;
`;

const FormLabel = styled.span`
  color:white;
  text-weight: bold;
  font-size:1.2rem;
`;

class FilterBar extends PureComponent {
    state = {
      priceRangeValue: 0,
    }

    onPriceRangeChange = (e) => {
      console.log('Price Changed:', e.target.value);
      this.setState({
        priceRangeValue: e.target.value,
      });
    }

    onActivityTypeChange = (e) => console.log('Activity Changed: ', e)
    onRatingChange = (e) => console.log('Rating Changed', e);

    render() {
      return (
        <Container>
          <FilterByTitle>
          Filter By
          </FilterByTitle>
          <Form>
            <FormLabel>Activity Types</FormLabel>
            <ActivityTypeFilter
              className={filterGroupStyle}
              activityTypes={this.props.activityTypes}
              onTypesChanged={this.onActivityTypeChange}
            />
            <FormLabel>Prices</FormLabel>
            <PriceFilter 
              className={ filterGroupStyle } 
              onPriceRangeChange={this.onPriceRangeChange}
              priceRanges={this.props.priceRanges}
              priceRangeValue={this.state.priceRangeValue}
            />
            <FormLabel>Rating</FormLabel>
            <div>
              <Rate 
                allowHalf 
                defaultValue={1} 
                onChange={this.onRatingChange}
              />
            </div>
          </Form>
        </Container>
      );
    }
}

FilterBar.propTypes = {
  activityTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceRanges: PropTypes.arrayOf(PropTypes.string).isRequired
};

const FormFilterBar = Form.create()(FilterBar);

export default FormFilterBar;
