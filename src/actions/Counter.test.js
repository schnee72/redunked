import { INCREMENT, INCREMENT_REQUESTED } from '../constants/actionTypes';
import * as actions from './Counter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Counter actions', () => {
  it('should increment', () => {
    const expectedActions = [
      { type: INCREMENT_REQUESTED },
      { type: INCREMENT }
    ];
    const initialState = {
      count: 0,
      isIncrementing: false
    };
    const store = mockStore({ initialState });
    store.dispatch(actions.increment());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
