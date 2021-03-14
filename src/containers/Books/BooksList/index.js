import { useSelector } from 'react-redux';
import { getBooks, fetchBookInProgress } from '../../../states/books/selectors';
import { bookTableConfig } from './index.config';
import Table from '../../../components/Table';
import BooksLoading from '../BooksLoading';

const BooksList = () => {
  const books = useSelector(getBooks);
  const isApiCallInProgress = useSelector(fetchBookInProgress);
  return (
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
  );
};
export default BooksList;
