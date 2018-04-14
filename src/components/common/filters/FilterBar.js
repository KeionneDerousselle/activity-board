import React, { PureComponent } from 'react';
import { Rate, Form } from 'antd';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import PriceFilter from './PriceFilter';
import ActivityTypeFilter from './ActivityTypeFilter';

import { filterGroupStyle } from './styles';

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

    onActivityTypeChange = (e) => console.log('Activity Changed: ', e);
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
