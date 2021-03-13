import { fetchBooks } from './actions';

describe('Books actions', () => {
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
