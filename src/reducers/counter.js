import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';
import initialState from './initialCounterState';

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };
    default:
      return state;
  }
};

