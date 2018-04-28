/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';

const renderMergedProps = (component, ...props) => React.createElement(component, { ...props });

const PropsRoute = ({ component, ...props }) =>
  <Route
    {...props}
    render={routeProps => renderMergedProps(component, routeProps, props)}
  />;

export default PropsRoute;
