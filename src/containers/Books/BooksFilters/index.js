import Button from '../../../components/Button';
import { booksPerPageOptions } from '../../../configs';
import { useSelector } from 'react-redux';
import { getActivePerPageCount } from '../../../states/books/selectors';
import { useLocation, useHistory } from 'react-router';
import routes from '../../../configs/routes';
// import BooksSearch from '../BooksSearch';

const BooksFilters = () => {
  const location = useLocation();
  const history = useHistory();
  const activePerPageCount = useSelector(getActivePerPageCount);
  const searchParams = new URLSearchParams(location.search);
  const handleActivePageCountChange = (event) => {
    searchParams.set('per_page', event.target.id);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?per_page=${event.target.id}`
    });
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
      Show
      {booksPerPageOptions.map((option) => (
        <Button
          key={option}
          isActive={option === activePerPageCount}
          id={option}
          name={option}
          onClick={handleActivePageCountChange}
        />
      ))}
      Entries
    </div>
  );
};
export default BooksFilters;
