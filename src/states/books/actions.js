import { RSAA } from 'redux-api-middleware';
import endpoints from '../../configs/endpoints';

export const FETCH_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const fetchBooks = ({ page = 1, itemsPerPage = 20, filters = [] } = {}) => {
  const endPoint = endpoints.fetchBooks;
  const url = endPoint.resolve();
  return {
    [RSAA]: {
      endpoint: url,
      method: endPoint.method,
      body: {
        page,
        itemsPerPage,
        filters
      },
      types: [FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE]
    }
  };
};
