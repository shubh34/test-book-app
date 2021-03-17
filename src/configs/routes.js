const routes = {
  HOME: {
    path: '/',
    resolve() {
      return this.path;
    }
  },
  BOOKS: {
    path: '/books',
    resolve() {
      return this.path;
    }
  },
  BOOK_DETAILS: {
    path: '/book/:id',
    resolve(id) {
      return this.path.replace(':id', id);
    }
  },
  NOT_FOUND: {
    path: '/not-found',
    resolve() {
      return this.path;
    }
  }
};

export default routes;
