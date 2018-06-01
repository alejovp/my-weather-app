import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
