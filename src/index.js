import 'babel-polyfill'; // enables features like Object.assign and Promises 
import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

render(<App />, document.getElementById('app'));
