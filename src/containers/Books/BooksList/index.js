import { useSelector } from 'react-redux';
import {
  getBooks,
  fetchBookInProgress,
  shouldShowNoBooks,
  shouldShowErrorMessage
} from '../../../states/books/selectors';
import { bookTableConfig } from './index.config';
import Table from '../../../components/Table';
import BooksLoading from '../BooksLoading';
import BooksNotFound from '../BooksNotFound';
import BooksError from '../BooksError';

const BooksList = () => {
  const books = useSelector(getBooks);
  const isApiCallInProgress = useSelector(fetchBookInProgress);
  const showNoBooksFound = useSelector(shouldShowNoBooks);
  const showErrorMessage = useSelector(shouldShowErrorMessage);
  return (
    <>
      <Table.Container>
        <Table.Header>
          <Table.Row>
            {bookTableConfig.map((tableHeader) => (
              <Table.HeaderCell key={`header-${tableHeader.id}`} style={tableHeader.style}>
                {tableHeader.name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isApiCallInProgress && <BooksLoading />}
          {!isApiCallInProgress &&
            books.map((book) => (
              <Table.Row key={book.id}>
                {bookTableConfig.map((tableHeader) => (
                  <Table.Cell
                    key={`row-${book.id}-${tableHeader.id}`}
                    title={tableHeader.mobile_name}
                    styling={tableHeader.styling}
                  >
                    {book[tableHeader.path]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Container>
      {showNoBooksFound && <BooksNotFound />}
      {showErrorMessage && <BooksError />}
    </>
  );
};
export default BooksList;
