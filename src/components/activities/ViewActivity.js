import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Row, Col, Rate, Tag, Divider, Button } from 'antd';
import { toCurrency } from '../common/utils';

const Rating = styled(Rate)({
  fontSize: 36
});

const CenteredCol = styled(Col)({
  display: 'flex',
  justifyContent: 'center'
});

const RightCol = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const imgCss = css({
  width: '100%'
});

const editButtonCss = css({
  marginRight: '10px'
});

const PaddedDiv = styled.div({
  padding: '20px 0'
});

const CustomTag = styled(Tag)({
  cursor: 'default',
  color: '#108ee9',
  borderColor: '#108ee9'
});

const ViewActivity = ({ ...props }) => {
  const {img, price, description, rating} = props.activity;
  const { tags, onArchiveClick, onEditClick } = props;

  const imageSrc = img || 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162bd73005f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162bd73005f%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  const priceAsCurrency = toCurrency(price);

  const tagsContent = tags.map((t, i) => {
    const isLongTag = t.length > 20;
    return (
      <CustomTag
        key={i}
        closable={false}
      >
        {isLongTag ? `${t.slice(0, 20)}...` : t}
      </CustomTag>
    );
  });

  return (
    <div>
      <Row type="flex" justify="center">
        <CenteredCol span={24}>
          <Rating
            allowHalf
            value={rating}
            disabled
          />
        </CenteredCol>
        <CenteredCol span={24}>
          <h2>{priceAsCurrency}</h2>
        </CenteredCol>
      </Row>

      <img
        src={imageSrc}
        alt="Activity Image"
        className={imgCss}
      />
      <PaddedDiv>
        {tagsContent}
        <PaddedDiv>
          <p>{description}</p>
        </PaddedDiv>
      </PaddedDiv>
      <Divider/>
      <Row>
        <RightCol>
          <Button
            type="primary"
            className={editButtonCss}
            icon="edit"
            onClick={onEditClick}
          >
            Edit
          </Button>
          <Button 
            type="primary"
            icon="inbox"
            onClick={onArchiveClick}
          >
            Archive
          </Button>
        </RightCol>
      </Row>
    </div>
  );
};

ViewActivity.propTypes = {
  tags: PropTypes.array,
  activity: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onArchiveClick: PropTypes.func.isRequired
};

export default ViewActivity;
