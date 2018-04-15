import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Activities, ManageActivity } from '../activities';

import { Layout } from 'antd';
const AntDContent = Layout.Content;

import { css } from 'react-emotion';
import { Spinner } from '../common';

const loadingClass = css({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
});

const RouteContent = 
  <Switch>
    <Route exact path="/activities" component={Activities} />
    <Route exact path="/activity" component={ManageActivity} />
    <Route exact path="/activity/:id" component={ManageActivity} />
    <Route exact path="/" component={Activities}/>
  </Switch>;

const Content = ({ isLoading, ...props }) => {
  const classNames = isLoading ? loadingClass : '';
  const content = isLoading ? <Spinner /> : RouteContent;
  return(
    <AntDContent
      className={classNames}
      {...props}
    >
      {content}
    </AntDContent>
  );
};

Content.propTypes = {
  isLoading: PropTypes.bool
};

export default Content;
