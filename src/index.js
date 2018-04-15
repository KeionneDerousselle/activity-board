import 'babel-polyfill'; // enables features like Object.assign and Promises 

import React from 'react';
import { render } from 'react-dom';

import configureStore from './store';
import { Provider } from 'react-redux';

import { App } from './components';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
