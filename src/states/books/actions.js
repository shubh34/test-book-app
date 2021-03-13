import { RSAA } from 'redux-api-middleware';
import endpoints from '../../configs/endpoints';

export const FETCH_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

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

export const fetchBooks = ({ page = 1, itemsPerPage = 20, filters = [] } = {}) => {
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
