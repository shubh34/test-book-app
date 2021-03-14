import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../states/books/actions';
import { useBooks } from './useBooks';
import BooksList from './BooksList';
import BooksFilters from './BooksFilters';
import BooksPagination from './BooksPagination';
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

const Books = () => {
  const dispatch = useDispatch();
  const { page, filters, itemsPerPage } = useBooks();
  const stringifiedFilters = JSON.stringify(filters);
  useEffect(() => {
    const filters = JSON.parse(stringifiedFilters);
    window.scrollTo(0, 0);
    dispatch(fetchBooks({ page, filters, itemsPerPage }));
  }, [dispatch, page, stringifiedFilters, itemsPerPage]);

  return (
    <Container>
      <PageHeader header={'Find My Books'} />
      <BooksFilters />
      <BooksList />
      <BooksPagination />
    </Container>
  );
};
export default Books;
