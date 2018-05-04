import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { TagInput, CurrencyInput, ImageUploader } from '../common';
import { Form, Input, Button, Rate, Divider } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const textAreaAutoSize = {
  minRows: 2,
  maxRows: 6
};

const StyledCurrencyInput = styled(CurrencyInput)({
  width: '100%'
});

const Div = styled.div({
  display: 'flex',
  justifyContent: 'flex-end'
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
      <Form onSubmit={onSubmit} layout="vertical">
        <FormItem label="Title">
          <Input
            name="title"
            size="large"
            onChange={this.handleChange}
            value={activity.title}
            disabled={saving}
          />
        </FormItem>
        <FormItem label="Activity Image">
          <ImageUploader
            name="img"
            onUploading={onImageUploading}
            onUploadSuccess={onImageUploadSucceeded}
            onUploadFailed={onImageUploadFailed}
            uploadUrl={imageUploadUrl}
          />

        </FormItem>
        <FormItem label="Price">
          <StyledCurrencyInput
            name="price"
            size="large"
            onPriceChange={onChange}
            price={activity.price}
            disabled={saving}
          />
        </FormItem>
        <FormItem label="Tags">
          <TagInput
            name="tags"
            size="large"
            allTags={tags}
            activityTags={activity.tags}
            onTagChange={onChange}
            disabled={saving}
          />
        </FormItem>
        <FormItem label="Description">
          <TextArea
            name="description"
            onChange={this.handleChange}
            value={activity.description}
            autosize={textAreaAutoSize}
            disabled={saving}
          />
        </FormItem>
        <FormItem label="Rating">
          <Rate
            allowHalf
            onChange={value => onChange('rating', value)}
            value={activity.rating}
            disabled={saving}
          />
        </FormItem>
        <Divider />
        <FormItem>
          <Div>
            <Button
              type="primary"
              onClick={onSubmit}
              loading={saving}
            >
              Submit
            </Button>
          </Div>
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
