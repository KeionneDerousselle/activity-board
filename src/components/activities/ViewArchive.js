import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';

const ViewArchive = ({ archiveDate, onEdit }) =>
  <div>
    <Row>
      <Col>
        <span>This activity is archived until {archiveDate}.</span>
      </Col>
      <Col>
        <Icon 
          type="edit"
          onClick={onEdit}
        />
      </Col>
    </Row>
  </div>;

ViewArchive.propTypes = {
  archiveDate: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ViewArchive;
