import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'react-emotion';
import moment from 'moment';

const parsingFormat = 'YYYY-MM-DD';
const displayFormat = 'dddd, MMM Do YYYY';

const FlexDiv = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const EditBtnDiv = styled.div({
  alignSelf: 'flex-end',
  cursor: 'pointer',
  fontSize: 16
});

const TextDiv = styled.div({
  alignSelf: 'flex-start'
});

const ViewArchive = ({ archiveDate, onEdit }) => {
  const displayDate = moment(archiveDate, parsingFormat).format(displayFormat);
  return (
    <FlexDiv>
      <TextDiv>
        <span>This activity is archived until {displayDate}.</span>
      </TextDiv>
      <EditBtnDiv>
        <Icon
          type="edit"
          onClick={onEdit}
        />
      </EditBtnDiv>
    </FlexDiv>
  );
};

ViewArchive.propTypes = {
  archiveDate: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ViewArchive;
