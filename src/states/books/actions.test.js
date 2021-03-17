import {
  fetchBooks,
  fetchBookRequest,
  fetchBookSuccess,
  fetchBookFailure,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  setPageNumberToFetchBook,
  SET_PAGE_NUMBER_TO_FETCH_BOOKS,
  setPerPageToFetchBooks,
  SET_PER_PAGE_BOOKS_TO_FETCH,
  setSearchCriteriaToFetchBook,
  SET_SEARCH_CRITERIA_TO_FETCH_BOOKS
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
  describe('fetchBookRequest', () => {
    it('should create action for fetch book request', () => {
      expect(fetchBookRequest(1)).toEqual({
        type: FETCH_BOOKS_REQUEST,
        meta: { page: 1 }
      });
    });
  });
  describe('fetchBookSuccess', () => {
    it('should create action for fetchBooks success', () => {
      expect(fetchBookSuccess(1)).toEqual({
        type: FETCH_BOOKS_SUCCESS,
        meta: { page: 1 }
      });
    });
  });
  describe('fetchBookFailure', () => {
    it('should create action for fetchBooks failure', () => {
      expect(fetchBookFailure(1)).toEqual({
        type: FETCH_BOOKS_FAILURE,
        meta: { page: 1 }
      });
    });
  });
  describe('setPageNumberToFetchBook', () => {
    it('should create action for setPageNumberToFetchBook', () => {
      expect(setPageNumberToFetchBook(1)).toEqual({
        type: SET_PAGE_NUMBER_TO_FETCH_BOOKS,
        page: 1
      });
    });
  });
  describe('setPerPageToFetchBooks', () => {
    it('should create action for setPerPageToFetchBooks', () => {
      expect(setPerPageToFetchBooks(40)).toEqual({
        type: SET_PER_PAGE_BOOKS_TO_FETCH,
        itemsPerPage: 40
      });
    });
  });
  describe('setSearchCriteriaToFetchBook', () => {
    it('should create action for setSearchCriteriaToFetchBook', () => {
      expect(setSearchCriteriaToFetchBook('search')).toEqual({
        type: SET_SEARCH_CRITERIA_TO_FETCH_BOOKS,
        filters: [{ type: 'all', values: ['search'] }]
      });
    });
  });
});
