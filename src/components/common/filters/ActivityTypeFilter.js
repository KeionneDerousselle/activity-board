import React from 'react';
import { css } from 'react-emotion';
import { Col, Row, Checkbox } from 'antd';
import PropType from 'prop-types';

import { filterGroupStyle } from './styles';

const CheckboxGroup = Checkbox.Group;

const checkboxStyle = css`
  color:white;
  padding: 3px 0;
`;

const ActivityTypeFilter = ({ activityTypes, onTypesChanged }) => {
  const checkboxes = activityTypes
    .map((type, i) => <Col key={i} span={24}><Checkbox value={type} className={checkboxStyle}>{type}</Checkbox></Col>);

  return (
    <CheckboxGroup className={filterGroupStyle} onChange={onTypesChanged}>
      <Row>
        {checkboxes}
      </Row>
    </CheckboxGroup>);
};


ActivityTypeFilter.propTypes = {
  activityTypes: PropType.arrayOf(PropType.string).isRequired,
  onTypesChanged: PropType.func.isRequired
};

export default ActivityTypeFilter;
