import reducer from './Counter';
import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';
import initialState from './initialCounterState';

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle INCREMENT_REQUESTED', () => {
    expect(reducer(initialState, { type: INCREMENT_REQUESTED })).toEqual({ isIncrementing: true, count: 0 });
  });
  it('should handle INCREMENT', () => {
    expect(reducer({ isIncrementing: true, count: 0 }, { type: INCREMENT })).toEqual({ isIncrementing: false, count: 1 });
  });
});
