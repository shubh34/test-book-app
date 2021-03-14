import get from 'lodash/get';
import { paginationButtonsToShow } from '../../configs';

export const getBooksMeta = (state) => get(state, 'books.meta', {});

export const getActivePageNumber = (state) => get(getBooksMeta(state), 'page', 0);

export const getTotalBooksCount = (state) => get(getBooksMeta(state), 'count', 0);

export const getActivePerPageCount = (state) => get(getBooksMeta(state), 'itemsPerPage', 0);

export const getTotalPages = (state) =>
  Math.ceil(getTotalBooksCount(state) / getActivePerPageCount(state));

export const shouldShowPreviousButton = (state) => getActivePageNumber(state) !== 1;

export const shouldShowNextButton = (state) => {
  return getTotalPages(state) !== getActivePageNumber(state);
};

export const getActivePageStart = (state) => {
  const activePageNumber = getActivePageNumber(state);
  if (activePageNumber > paginationButtonsToShow) {
    return activePageNumber - (getActivePageNumber(state) % paginationButtonsToShow);
  }
  return 1;
};

export const getBooks = (state) => {
  return get(state, `books.books.${getActivePageNumber(state)}.lists`, []).map(
    ({ book_author, ...book }) => ({
      ...book,
      book_authors: book_author.join(','),
      book_publication_location: `${book.book_publication_city}, ${book.book_publication_country}`
    })
  );
};

export const fetchBookInProgress = (state) =>
  get(state, `books.books.${getActivePageNumber(state)}.isApiCallInProgress`, false);

export const shouldShowNoBooks = (state) =>
  !get(state, `books.books.${getActivePageNumber(state)}.isApiCallInProgress`, false) &&
  getBooks(state).length === 0;

export const shouldShowErrorMessage = (state) =>
  get(state, `books.books.${getActivePageNumber(state)}.hasError`, false);

export const shouldShowPagination = (state) =>
  !(shouldShowErrorMessage(state) || shouldShowNoBooks(state) || fetchBookInProgress(state));
