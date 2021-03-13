import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from './actions';

export const defaultState = {
  books: [],
  isApiCallInProgress: false,
  hasError: false,
  error: undefined
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_BOOKS_SUCCESS:
      return defaultState;
    case FETCH_BOOKS_FAILURE:
      return defaultState;
    default:
      return state;
  }
};
export default reducer;
