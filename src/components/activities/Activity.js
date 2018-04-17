import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ActivityCardContent from './ActivityCardContent';
import { Card, Icon, Tooltip } from 'antd';
const { Meta } = Card;

// TODO: create price component with dollar signs
// TODO: save images for activities

const cardBodyStyles = {
  padding: 20
};

const Activity = withRouter(
  ({ history, ...activity }) =>
    <Card
      bodyStyle={cardBodyStyles}
      title={activity.title}
      hoverable
      cover={
        <img
          src={'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162bd73005f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162bd73005f%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'}
          alt="Activity Image"
        />
      }
      extra={
        <Tooltip
          title="Archive"
          placement="bottom"
        >
          <Icon type="inbox" />
        </Tooltip>
      }
      onClick={() => history.push(`/activity/${activity.id}`)}
    >
      <Meta

        description={
          <ActivityCardContent
            rating={activity.rating}
            description={activity.description}
            price={activity.price}
          />
        }
      />
    </Card>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string.isRequired,
  tags: PropTypes.array,
  price: PropTypes.number
};

export default Activity;
