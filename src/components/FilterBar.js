import React, { PureComponent, Fragment } from 'react';
// import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Rate, Form } from 'antd';
import styled, { css } from 'react-emotion';
const FormItem = Form.Item;

const FilterTitle = styled('h1') `
  color:white;
`

const FormLabel = styled('span') `
  color:white;
  text-weight: bold;
  font-size:1.2rem;
`

class FilterBar extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Fragment>
        <FilterTitle>
          Filter By
        </FilterTitle>
        <Form>
          <FormLabel>
            Rating
          </FormLabel>
          <div>
            <Rate allowHalf defaultValue={1}/>
          </div>
        </Form>
      </Fragment>
    );
  }
}

const FormFilterBar = Form.create()(FilterBar)

export default FormFilterBar;
