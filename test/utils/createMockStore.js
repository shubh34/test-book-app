import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import createStore from '../../src/stores';
import createMockState from './createMockState';

export const createMockStore = (stateKey, hasThunk = false) => {
  const state = createMockState(stateKey);
  if (hasThunk) {
    const mockStore = configureStore([apiMiddleware, thunk]);
    return mockStore(state);
  }
  const store = createStore(state);
  return store;
};

export default createMockStore;
