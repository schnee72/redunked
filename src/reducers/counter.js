export const INCREMENT = 'counter/INCREMENT';
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';

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
        count: state.count +1,
        isIncrementing: !state.isIncrementing
      };
    default:
      return state;
  }
};

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });
    dispatch({
      type: INCREMENT
    });
  };
};
