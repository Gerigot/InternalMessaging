import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Styled from './Util/Styled';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './Reducers';

const store = createStore(reducer,applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}><Styled><App /></Styled></Provider>,
  document.getElementById('root')
);
