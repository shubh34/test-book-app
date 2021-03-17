const endpoints = {
  fetchBooks: {
    url: '/api/books',
    method: 'POST',
    resolve() {
      return this.url.replace();
    }
  },
  fetchBookById: {
    url: '/api/books/{id}',
    method: 'GET',
    resolve(id) {
      return this.url.replace('{id}', id);
    }
  }
};

export default endpoints;
