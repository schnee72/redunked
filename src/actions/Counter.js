import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';

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
