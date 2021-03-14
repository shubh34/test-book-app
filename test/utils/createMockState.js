import { bookStateWithBooks, initialBookState } from '../mockStates/books';

const initialMockState = {
  books: initialBookState
};
const mockStateWithBooks = {
  ...initialMockState,
  books: bookStateWithBooks
};
const state = {
  DEFAULT: initialMockState,
  DEFAULT_WITH_BOOKS: mockStateWithBooks
};

export const createMockState = (stateKey = 'DEFAULT') => state[stateKey];

export default createMockState;
