import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
const { Dragger } = Upload;


class ImageUploader extends React.Component {
  handleBeforeUpload = file => {
    const { onUploadFailed } = this.props;
    const typeParts = file.type.split('/');
    const isImage = typeParts[0] === 'image' && typeParts[1].match(/(jpg|jpeg|png|gif)/);
    if (!isImage) {
      onUploadFailed(file);
      return false;
    }
    // TODO: Check image file size;
    return true;
  };

  handleOnChange = info => {
    const { name, onUploading, onUploadSuccess, onUploadFailed } = this.props;
    const { status } = info.file;

    if (status === 'uploading' && onUploading) {
      onUploading(info);
    } else if (status === 'done') {
      this.getBase64(info.file.originFileObj, imgUrl => onUploadSuccess(name, imgUrl));
    } else if (status === 'error') {
      onUploadFailed(info);
    }
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const { name, defaultValue, uploadUrl, ...props } = this.props;
    const defaultImage = defaultValue ? [defaultValue] : null;
    return (
      <Dragger
        name={name}
        onChange={this.handleOnChange}
        beforeUpload={this.handleBeforeUpload}
        accept="image/*"
        action={uploadUrl}
        defaultFileList={defaultImage}
        {...props}
      >
        <p className="ant-upload-drag-icon">
          <Icon type="picture" />
        </p>
        <p className="ant-upload-text">Click to upload or drag and drop an image for this activity.</p>
      </Dragger>
    );
  }
}

ImageUploader.propTypes = {
  name: PropTypes.string.isRequired,
  onUploading: PropTypes.func,
  onUploadSuccess: PropTypes.func.isRequired,
  onUploadFailed: PropTypes.func.isRequired,
  uploadUrl: PropTypes.string.isRequired,
  defaultValue: PropTypes.shape({
    uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    response: PropTypes.string,
    url: PropTypes.string.isRequired
  })
};

export default ImageUploader;

