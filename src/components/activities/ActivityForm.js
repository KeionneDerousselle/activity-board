import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Rate, Select } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

const labelColSm = { span: 24 };
const wrapperColSm= { span: 24 };

const labelColMd = { span: 4 };
const wrapperColMd = { span: 18 };

const formItemLayout = {
  labelCol: {
    xs: labelColSm,
    sm: labelColSm,
    md: labelColMd,
    lg: labelColMd,
    xl: labelColMd,
    xxl: labelColMd
  },

  wrapperCol: {
    xs: wrapperColSm,
    sm: wrapperColSm,
    md: wrapperColMd,
    lg: wrapperColMd,
    xl: wrapperColMd,
    xxl: wrapperColMd
  }
};

const formTailSm = {
  span: 24,
  offset: 0
};

const formTailMd = {
  span: 18,
  offset: 4
};

const formTailLayout = {
  wrapperCol: {
    xs: formTailSm,
    sm: formTailSm,
    md: formTailMd,
    lg: formTailMd,
    xl: formTailMd,
    xxl: formTailMd
  }
};

const textAreaAutoSize = {
  minRows: 2,
  maxRows: 6
};

class ActivityForm extends React.Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  render() {
    const { activity, onSubmit, onChange } = this.props;
    return (
      <Form onSubmit={onSubmit}>
        <FormItem
          {...formItemLayout}
          label="Title"
        >
          <Input
            name="title"
            size="large"
            onChange={this.handleChange}
            value={activity.title}
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Type"
        >
          <Select
            name="type"
            size="large"
            onChange={value => onChange('type', value)}
            value={activity.type}
          >
            <Option value="Restaurant">Restaurant</Option>
            <Option value="Outdoor Activity">Outdoor Activity</Option>
            <Option value="Indoor Activity">Indoor Activity</Option>
          </Select>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Price"
        >
          <Input
            name="price"
            size="large"
            onChange={this.handleChange}
            value={activity.price}
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Description"
        >
          <TextArea
            name="description"
            onChange={this.handleChange}
            value={activity.description}
            autosize={textAreaAutoSize}
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Rating"
        >
          <Rate
            allowHalf
            onChange={value => onChange('rating', value)}
            value={activity.rating}
          />
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button
            type="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

ActivityForm.propTypes = {
  activity: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const WrappedForm = Form.create()(ActivityForm);

export default WrappedForm;

