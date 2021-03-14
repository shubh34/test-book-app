import {
  bookStateWithBooks,
  initialBookState,
  booksStateWithApiInProgress,
  booksStateWithApiFailure
} from '../mockStates/books';

export const initialMockState = {
  books: initialBookState
};
export const mockStateWithBooks = {
  ...initialMockState,
  books: bookStateWithBooks
};

export const mockStateWithBooksApiInProgress = {
  ...initialMockState,
  books: booksStateWithApiInProgress
};

export const mockStateWithBooksApiFailure = {
  ...initialMockState,
  books: booksStateWithApiFailure
};

const state = {
  DEFAULT: initialMockState,
  DEFAULT_WITH_BOOKS: mockStateWithBooks,
  BOOKS_WITH_API_IN_PROGRESS: mockStateWithBooksApiInProgress,
  BOOKS_WITH_API_FAILURE: mockStateWithBooksApiFailure
};

export const createMockState = (stateKey = 'DEFAULT') => state[stateKey];

export default createMockState;
