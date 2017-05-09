
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App';

import {Provider} from 'react-redux';
import store from './store';
import  './main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);