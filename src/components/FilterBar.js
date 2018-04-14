import React, { PureComponent, Fragment } from 'react';
// import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Rate, Form, Checkbox } from 'antd';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group

const Container = styled('div')`
  margin-left: .8rem;
`

const FilterByTitle = styled('h1') `
  color:white;
`

const FormLabel = styled('span') `
  color:white;
  text-weight: bold;
  font-size:1.2rem;
`

const activities = [
  'Apple', 
  'Pear', 
  'Orange'
];

class FilterBar extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Container>
        <FilterByTitle>
          Filter By
        </FilterByTitle>
        <Form>
          <FormLabel>
            Activity Types
          </FormLabel>
          <CheckboxGroup options={this.props.activityTypes}>
          </CheckboxGroup>
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
  activityTypes: PropTypes.arrayOf(PropTypes.string).isRequired
}

const FormFilterBar = Form.create()(FilterBar)

export default FormFilterBar;
