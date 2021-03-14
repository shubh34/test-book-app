import get from 'lodash/get';

export const getBooksMeta = (state) => get(state, 'books.meta', {});

export const getActivePageNumber = (state) => get(getBooksMeta(state), 'page', 0);

export const getActivePerPageCount = (state) => get(getBooksMeta(state), 'itemsPerPage', 0);

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
