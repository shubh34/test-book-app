import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  SET_PAGE_NUMBER_TO_FETCH_BOOKS,
  SET_PER_PAGE_BOOKS_TO_FETCH,
  SET_SEARCH_CRITERIA_TO_FETCH_BOOKS
} from './actions';

export const pageDefaultState = {
  lists: [],
  isApiCallInProgress: false,
  hasError: false,
  error: undefined
};
export const defaultState = {
  books: {},
  meta: {
    page: 1,
    count: 0,
    itemsPerPage: 20,
    filters: []
  }
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
        },
        meta: {
          ...state.meta,
          count: action.payload.count
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
    case SET_PAGE_NUMBER_TO_FETCH_BOOKS:
      return {
        ...state,
        books: {},
        meta: {
          ...state.meta,
          page: action.page
        }
      };
    case SET_PER_PAGE_BOOKS_TO_FETCH:
      return {
        ...state,
        books: {},
        meta: {
          ...state.meta,
          itemsPerPage: action.itemsPerPage
        }
      };
    case SET_SEARCH_CRITERIA_TO_FETCH_BOOKS:
      return {
        ...state,
        books: {},
        meta: {
          ...state.meta,
          filters: action.filters
        }
      };
    default:
      return state;
  }
};
export default reducer;
