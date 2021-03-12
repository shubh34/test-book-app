import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './actions';

export const defaultState = {
  books: [],
  isApiCallInProgress: false,
  hasError: false,
  error: undefined
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case GET_BOOKS_SUCCESS:
      return defaultState;
    case GET_BOOKS_FAILURE:
      return defaultState;
    default:
      return state;
  }
};
export default reducer;
