import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};

const middlewares = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger').createLogger;
  middlewares.push(createLogger({ collapsed: true, diff: true }));
}

const composed = compose(
  applyMiddleware(...middlewares)
);

const store = createStore(
  rootReducer,
  initialState,
  composed
);

export default store;
