import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const { Option } = Select;

class TagInput extends React.Component {
  handleChange = tags => {
    const { onTagChange, name } = this.props;
    onTagChange(name, tags.map(t => t.key));
  }

  render() {
    const { name, allTags, activityTags, ...props } = this.props;

    let currentValue = [];
    let remainingOptions = [];

    for (let key in allTags) {
      if (!activityTags || activityTags.length === 0 || activityTags.indexOf(key) === -1) {
        remainingOptions.push(<Option key={key}>{allTags[key]}</Option>);
      } else if (activityTags.indexOf(key) > -1) {
        currentValue.push({
          key: key,
          label: allTags[key]
        });
      }
    }

    return (
      <Select
        name={name}
        mode="multiple"
        labelInValue
        onChange={this.handleChange}
        value={currentValue}
        {...props}
      >
        {remainingOptions}
      </Select>
    );
  }
}

TagInput.propTypes = {
  allTags: PropTypes.object.isRequired,
  activityTags: PropTypes.array.isRequired,
  onTagChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default TagInput;
