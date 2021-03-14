import Button from '../../../components/Button';
import {
  getActivePageNumber,
  getActivePageStart,
  shouldShowPreviousButton,
  shouldShowNextButton,
  shouldShowPagination
} from '../../../states/books/selectors';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import routes from '../../../configs/routes';
import { paginationButtonsToShow } from '../../../configs';

const BooksPagination = () => {
  const history = useHistory();
  const location = useLocation();
  const activePageNumber = useSelector(getActivePageNumber);
  const activePageStart = useSelector(getActivePageStart);
  const showPagination = useSelector(shouldShowPagination);

  const showPrevious = useSelector(shouldShowPreviousButton);
  const showNext = useSelector(shouldShowNextButton);

  const searchParams = new URLSearchParams(location.search);
  const handlePageNumberClick = (event) => {
    searchParams.set('page', event.target.id);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  };
  const handlePageNext = () => {
    searchParams.set('page', activePageNumber + 1);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  };
  const handlePagePrevious = () => {
    searchParams.set('page', activePageNumber - 1);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  };
  if (!showPagination) {
    return null;
  }
  return (
    <div style={{ display: 'flex', padding: '16px 0' }}>
      <Button name="Previous" disabled={!showPrevious} onClick={handlePagePrevious} />
      {[...Array(paginationButtonsToShow)].map((count, index) => {
        const buttonNumber = activePageStart + index;
        return (
          <Button
            key={`page-${buttonNumber}`}
            name={buttonNumber}
            id={buttonNumber}
            isActive={buttonNumber === activePageNumber}
            onClick={handlePageNumberClick}
          />
        );
      })}
      <Button name={'Next'} disabled={!showNext} onClick={handlePageNext} />
    </div>
  );
};
export default BooksPagination;
