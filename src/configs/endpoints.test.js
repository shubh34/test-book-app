import endpoints from './endpoints';

describe('Endpoints', () => {
  it('should resolve fetchBooks endpoint', () => {
    expect(endpoints.fetchBooks.resolve()).toBe('/api/books');
  });
  it('should resolve fetchBooksById endpoint', () => {
    expect(endpoints.fetchBookById.resolve('book-id')).toBe('/api/books/book-id');
  });
});
