import {
  fetchBooks,
  fetchBookRequest,
  fetchBookSuccess,
  fetchBookFailure,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from './actions';

describe('Books actions', () => {
  describe('fetchBooks', () => {
    it('should create action for fetchBooks with default params', () => {
      expect(fetchBooks()).toMatchSnapshot();
    });
    it('should create action for fetchBooks with passed params', () => {
      expect(
        fetchBooks({
          page: 2,
          itemsPerPage: 60,
          filters: [{ type: 'all', values: ['YOUR_SEARCH_FIELD_CONTENTS'] }]
        })
      ).toMatchSnapshot();
    });
  });
  describe('fetchBooks failure', () => {
    it('should create action for fetchBooks with default params', () => {
      expect(fetchBookRequest(1)).toEqual({
        type: FETCH_BOOKS_REQUEST,
        meta: { page: 1 }
      });
    });
  });
  describe('fetchBooks request', () => {
    it('should create action for fetchBooks with default params', () => {
      expect(fetchBookSuccess(1)).toEqual({
        type: FETCH_BOOKS_SUCCESS,
        meta: { page: 1 }
      });
    });
  });
  describe('fetchBooks success', () => {
    it('should create action for fetchBooks with default params', () => {
      expect(fetchBookFailure(1)).toEqual({
        type: FETCH_BOOKS_FAILURE,
        meta: { page: 1 }
      });
    });
  });
});
