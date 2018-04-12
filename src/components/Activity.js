import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

// TODO: create rating component with stars
// TODO: create price component with dollar signs
// TODO: save images for activities

const Activity = ({ ...activity }) =>
  <Card>
    <CardBody>
      <CardTitle>{activity.title}</CardTitle>
      <CardSubtitle>{activity.type}</CardSubtitle>
      <CardSubtitle>{activity.rating}</CardSubtitle>
    </CardBody>
    {
      activity.img &&
      <img
        width="100%"
        src="some/placeholder.jpg"
        alt="Activity Image"
      />
    }
    <CardBody>
      {activity.description && <CardText>{activity.description}</CardText>}
      <CardText>
        <small className="text-muted">{activity.price}</small>
      </CardText>
    </CardBody>
  </Card>;

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string.isRequired,
  tags: PropTypes.array,
  price: PropTypes.number
};

export default Activity;
