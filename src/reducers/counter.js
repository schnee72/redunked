import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';

const initialState = {
  count: 0,
  isIncrementing: false
};

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

