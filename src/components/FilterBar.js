import React, { PureComponent } from 'react';
// import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Rate, Form, Checkbox, Row, Col, Radio } from 'antd';
import styled, {css} from 'react-emotion';
import PropTypes from 'prop-types';

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


const checkboxStyle = css`
  color:white;
  padding: 3px 0;
`;

const filterGroupStyle = css`
  padding: .5rem 0;
  padding-left: .5rem;
`;

const radioButtonStyle = css`
  color:white;
  padding: 3px 0;
`;

class FilterBar extends PureComponent {
    state = {
      priceRangeValue: 0,
    }
    onPriceRangeChange = (e) => {
      this.setState({
        priceRangeValue: e.target.value,
      });
    }

    render() {
      // const { getFieldDecorator } = this.props.form;

      const checkboxes = this.props.activityTypes
        .map((type, i) => <Col key={i} span={24}><Checkbox value={type} className={checkboxStyle}>{type}</Checkbox></Col>);

      const radioButtons = this.props.priceRanges
        .map((priceRange, i) => 
          <Radio 
            className={radioButtonStyle} 
            value={i} 
            key={i}
          >{priceRange}
          </Radio>);

      return (
        <Container>
          <FilterByTitle>
          Filter By
          </FilterByTitle>
          <Form>
            <FormLabel>
            Activity Types
            </FormLabel>
            <CheckboxGroup className={filterGroupStyle}>
              <Row>
                {checkboxes}
              </Row>
            </CheckboxGroup>
            <FormLabel>
              Prices
            </FormLabel>
            <RadioGroup className={ filterGroupStyle } onChange={this.onPriceRangeChange} value={this.state.priceRangeValue}>
              {radioButtons}
            </RadioGroup>
            <FormLabel>
            Rating
            </FormLabel>
            <div>
              <Rate allowHalf defaultValue={1}/>
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
