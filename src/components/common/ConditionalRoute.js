import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PropsRoute from './PropsRoute';

const ConditionalRoute = ({ condition, redirect, component, ...others }) => {
  const showComponent = condition();
  return (
    showComponent ?
      <PropsRoute
        component={component}
        {...others}
      /> :
      <Route
        {...others}
        render={props => <Redirect to={redirect} {...props} />}
      />
  );
};

ConditionalRoute.propTypes = {
  condition: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
};

export default ConditionalRoute;
