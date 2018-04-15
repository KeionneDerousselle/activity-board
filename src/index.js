import 'babel-polyfill'; // enables features like Object.assign and Promises 

import React from 'react';
import { render } from 'react-dom';

import { configureStore } from './store';
import { Provider } from 'react-redux';

import { Routes } from './components/routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
