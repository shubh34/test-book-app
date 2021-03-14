import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../states/books/actions';
import { useBooks } from './useBooks';
import { useHistory } from 'react-router';
import BooksList from './BooksList';

const Books = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { page, filters, itemsPerPage, searchParams } = useBooks();
  const stringifiedFilters = JSON.stringify(filters);
  useEffect(() => {
    const filters = JSON.parse(stringifiedFilters);
    dispatch(fetchBooks({ page, filters, itemsPerPage }));
  }, [dispatch, page, stringifiedFilters, itemsPerPage]);

  const handleSearchClick = () => {
    searchParams.set('search', 'shubham');
    //   dispatch(setSearchCriteriaToFetchBook('shubh'))
    history.push({ search: `?${searchParams.toString()}` });
  };
  return (
    <div>
      <BooksList />
      Heya Calling Books API <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};
export default Books;
