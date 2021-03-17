import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../states/books/actions';
import { useBooks } from './useBooks';
import BooksList from './BooksList';
import BooksFilters from './BooksFilters';
import BooksPagination from './BooksPagination';
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router';

const Books = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { page, filters, itemsPerPage, searchParams } = useBooks();
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
      <BooksPagination searchParams={searchParams} history={history} />
    </Container>
  );
};
export default Books;
