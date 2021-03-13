import reducer from './reducer';
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from './actions';

describe('Reducer Books', () => {
  it('FETCH_BOOKS_REQUEST should update api in call for requested page', () => {
    const action = {
      type: FETCH_BOOKS_REQUEST,
      meta: { page: 1 }
    };
    const updateState = reducer(undefined, action);
    expect(updateState.books[1].isApiCallInProgress).toBe(true);
    expect(updateState).toMatchSnapshot();
  });
  it('FETCH_BOOKS_SUCCESS should update books list of requested page', () => {
    const action = {
      type: FETCH_BOOKS_SUCCESS,
      payload: { books: [{ id: 'book-id' }], count: 2 },
      meta: { page: 1 }
    };
    const updateState = reducer(undefined, action);
    expect(updateState).toMatchSnapshot();
  });
  it('FETCH_BOOKS_FAILURE should update error for requested page', () => {
    const action = {
      type: FETCH_BOOKS_FAILURE,
      meta: { page: 1 }
    };
    const updateState = reducer(undefined, action);
    expect(updateState.books[1].hasError).toBe(true);
    expect(updateState).toMatchSnapshot();
  });
});
