import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { TagInput, CurrencyInput, ImageUploader } from '../common';
import { Form, Input, Button, Rate } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const labelColSm = { span: 24 };
const wrapperColSm = { span: 24 };

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

const StyledCurrencyInput = styled(CurrencyInput)({
  width: '100%'
});

class ActivityForm extends React.Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  render() {
    const
      {
        activity,
        onSubmit,
        onChange,
        onImageUploading,
        onImageUploadFailed,
        onImageUploadSucceeded,
        imageUploadUrl,
        saving,
        tags
      } = this.props;

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
            disabled={saving}
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Activity Image"
        >
          <ImageUploader
            name="img"
            onUploading={onImageUploading}
            onUploadSuccess={onImageUploadSucceeded}
            onUploadFailed={onImageUploadFailed}
            uploadUrl={imageUploadUrl}
          />

        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Price"
        >
          <StyledCurrencyInput
            name="price"
            size="large"
            onPriceChange={onChange}
            price={activity.price}
            disabled={saving}
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Tags"
        >
          <TagInput
            name="tags"
            size="large"
            allTags={tags}
            activityTags={activity.tags}
            onTagChange={onChange}
            disabled={saving}
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
            disabled={saving}
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
            disabled={saving}
          />
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button
            type="primary"
            onClick={onSubmit}
            loading={saving}
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
  onSubmit: PropTypes.func.isRequired,
  onImageUploading: PropTypes.func,
  onImageUploadSucceeded: PropTypes.func.isRequired,
  onImageUploadFailed: PropTypes.func.isRequired,
  imageUploadUrl: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
  saving: PropTypes.bool,
};

const WrappedForm = Form.create()(ActivityForm);

export default WrappedForm;
