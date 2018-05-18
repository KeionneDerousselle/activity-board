import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ConditionalRoute = ({ condition, redirect, component: Component, ...others }) =>
  <Route
    {...others}
    render={props => {
      return condition() ?
        <Component {...props} {...others}/> :
        <Redirect to={redirect} />;
    }}
  />;

ConditionalRoute.propTypes = {
  condition: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired
};

export default ConditionalRoute;
