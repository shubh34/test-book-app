export const initialBookState = {
  books: {},
  meta: {
    page: 1,
    count: 0,
    itemsPerPage: 20,
    filters: []
  }
};

export const bookStateWithBooks = {
  books: {
    1: {
      lists: [
        {
          id: 2086,
          book_author: ['Author 1', 'Author 2'],
          book_title: 'Book Title',
          book_publication_year: 2020,
          book_publication_country: 'Country',
          book_publication_city: 'City',
          book_pages: 104
        }
      ],
      isApiCallInProgress: false,
      hasError: false,
      error: undefined
    }
  },
  meta: {
    page: 1,
    count: 0,
    itemsPerPage: 20,
    filters: []
  }
};
