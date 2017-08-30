import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Counter from './Counter';

export default combineReducers({
  router: routerReducer,
  Counter
});
