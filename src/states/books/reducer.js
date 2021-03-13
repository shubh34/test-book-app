import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from './actions';

export const pageDefaultState = {
  lists: [],
  isApiCallInProgress: false,
  hasError: false,
  error: undefined
};
export const defaultState = {
  books: {},
  isApiCallInProgress: false,
  hasError: false,
  error: undefined
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: {
          ...state.books,
          [action.meta.page]: {
            ...pageDefaultState,
            isApiCallInProgress: true,
            hasError: false,
            error: undefined
          }
        }
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          [action.meta.page]: {
            ...pageDefaultState,
            lists: action.payload.books
          }
        }
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: {
          ...state.books,
          [action.meta.page]: {
            ...pageDefaultState,
            hasError: true
          }
        }
      };
    default:
      return state;
  }
};
export default reducer;
