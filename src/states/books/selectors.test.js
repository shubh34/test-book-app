import {
  initialMockState,
  mockStateWithBooks,
  mockStateWithBooksApiInProgress,
  mockStateWithBooksApiFailure
} from '../../../test/utils/createMockState';
import {
  getBooksMeta,
  getActivePageNumber,
  getTotalBooksCount,
  getActivePerPageCount,
  getTotalPages,
  shouldShowPreviousButton,
  shouldShowNextButton,
  getActivePageStart,
  getBooks,
  fetchBookInProgress,
  shouldShowNoBooks,
  shouldShowErrorMessage,
  shouldShowPagination
} from './selectors';

describe('Selectors', () => {
  it('getBooksMeta should get meta', () => {
    expect(getBooksMeta(mockStateWithBooks)).toMatchSnapshot();
  });
  it('getActivePageNumber should get active page number', () => {
    expect(getActivePageNumber(mockStateWithBooks)).toBe(1);
  });
  it('getTotalBooksCount should give book count', () => {
    expect(getTotalBooksCount(mockStateWithBooks)).toBe(5);
  });
  it('getActivePerPageCount should give per page count', () => {
    expect(getActivePerPageCount(mockStateWithBooks)).toBe(2);
  });
  it('getTotalPages should give total page as 3 when count is 5 and per page is 2', () => {
    expect(getTotalPages(mockStateWithBooks)).toBe(3);
  });
  it('getBooks should return books for active page number', () => {
    expect(getBooks(mockStateWithBooks)).toMatchSnapshot();
  });
  describe('shouldShowPreviousButton', () => {
    it('shouldShowPreviousButton should return false when on first page', () => {
      expect(shouldShowPreviousButton(mockStateWithBooks)).toBe(false);
    });
    it('shouldShowPreviousButton should return true when not on first page', () => {
      expect(shouldShowPreviousButton({ books: { meta: { page: 2 } } })).toBe(true);
    });
  });
  describe('shouldShowNextButton', () => {
    it('shouldShowPreviousButton should return true when on first page', () => {
      expect(shouldShowNextButton(mockStateWithBooks)).toBe(true);
    });
    it('shouldShowPreviousButton should return false on last page', () => {
      expect(
        shouldShowNextButton({ books: { meta: { page: 3, count: 5, itemsPerPage: 2 } } })
      ).toBe(false);
    });
  });
  describe('getActivePageStart', () => {
    it('getActivePageStart should return start at one', () => {
      expect(getActivePageStart(mockStateWithBooks)).toBe(1);
    });
    it('getActivePageStart should return start at 6', () => {
      expect(getActivePageStart({ books: { meta: { page: 8, count: 10, itemsPerPage: 2 } } })).toBe(
        6
      );
    });
  });
  describe('fetchBookInProgress', () => {
    it('should false when not in progress', () => {
      expect(fetchBookInProgress(mockStateWithBooks)).toBe(false);
    });
    it('should true when in progress', () => {
      expect(fetchBookInProgress(mockStateWithBooksApiInProgress)).toBe(true);
    });
  });
  describe('shouldShowNoBooks', () => {
    it('should return true no books', () => {
      expect(shouldShowNoBooks(initialMockState)).toBe(true);
    });
    it('should false when in progress', () => {
      expect(shouldShowNoBooks(mockStateWithBooksApiInProgress)).toBe(false);
    });
    it('should false when books already there', () => {
      expect(shouldShowNoBooks(mockStateWithBooks)).toBe(false);
    });
  });
  describe('shouldShowErrorMessage', () => {
    it('should return false no books', () => {
      expect(shouldShowErrorMessage(initialMockState)).toBe(false);
    });
    it('should false when in progress', () => {
      expect(shouldShowErrorMessage(mockStateWithBooksApiInProgress)).toBe(false);
    });
    it('should true when api error', () => {
      expect(shouldShowErrorMessage(mockStateWithBooksApiFailure)).toBe(true);
    });
  });
  describe('shouldShowPagination', () => {
    it('should return false no books', () => {
      expect(shouldShowPagination(initialMockState)).toBe(false);
    });
    it('should false when in progress', () => {
      expect(shouldShowPagination(mockStateWithBooksApiInProgress)).toBe(false);
    });
    it('should false when api error', () => {
      expect(shouldShowPagination(mockStateWithBooksApiFailure)).toBe(false);
    });
    it('should true when books', () => {
        expect(shouldShowPagination(mockStateWithBooks)).toBe(true);
      });
  });
});
