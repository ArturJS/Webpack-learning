import rootReducer from '../reducers';
import {createStore, applyMiddleware } from 'redux';

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
