import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../states/books/actions';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return <div>Heya Calling Books API</div>;
};
export default Books;
