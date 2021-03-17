import { RSAA } from 'redux-api-middleware';
import endpoints from '../../configs/endpoints';

export const FETCH_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const SET_PAGE_NUMBER_TO_FETCH_BOOKS = 'SET_PAGE_NUMBER_TO_FETCH_BOOKS';
export const SET_PER_PAGE_BOOKS_TO_FETCH = 'SET_PER_PAGE_BOOKS_TO_FETCH';
export const SET_SEARCH_CRITERIA_TO_FETCH_BOOKS = 'SET_SEARCH_CRITERIA_TO_FETCH_BOOKS';

export const fetchBookRequest = (page) => ({
  type: FETCH_BOOKS_REQUEST,
  meta: {
    page
  }
});
export const fetchBookSuccess = (page) => ({
  type: FETCH_BOOKS_SUCCESS,
  meta: {
    page
  }
});
export const fetchBookFailure = (page) => ({
  type: FETCH_BOOKS_FAILURE,
  meta: {
    page
  }
});

export const fetchBooks = ({
  page = 1,
  itemsPerPage = 20,
  filters = [{ type: 'all', values: [''] }]
} = {}) => {
  const endPoint = endpoints.fetchBooks;
  const url = endPoint.resolve();
  return {
    [RSAA]: {
      endpoint: url,
      method: endPoint.method,
      body: JSON.stringify({
        page,
        itemsPerPage,
        filters
      }),
      types: [fetchBookRequest(page), fetchBookSuccess(page), fetchBookFailure(page)]
    }
  };
};

export const setPageNumberToFetchBook = (page) => ({
  type: SET_PAGE_NUMBER_TO_FETCH_BOOKS,
  page
});

export const setPerPageToFetchBooks = (itemsPerPage) => ({
  type: SET_PER_PAGE_BOOKS_TO_FETCH,
  itemsPerPage
});

export const setSearchCriteriaToFetchBook = (search) => ({
  type: SET_SEARCH_CRITERIA_TO_FETCH_BOOKS,
  filters: [{ type: 'all', values: [search] }]
});
