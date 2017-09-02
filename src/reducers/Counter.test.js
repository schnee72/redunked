import reducer from './Counter';
import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';

const initialState = {
  count: 0,
  isIncrementing: false
};

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle INCREMENT_REQUESTED', () => {
    expect(reducer({}, { type: INCREMENT_REQUESTED })).toEqual({ isIncrementing: true });
  });
  it('should handle INCREMENT', () => {
    expect(reducer({ isIncrementing: true, count: 0 }, { type: INCREMENT })).toEqual({ isIncrementing: false, count: 1 });
  });
});
