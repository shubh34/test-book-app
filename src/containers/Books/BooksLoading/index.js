import { useSelector } from 'react-redux';
import { getActivePerPageCount } from '../../../states/books/selectors';
import Table from '../../../components/Table';
import { bookTableConfig } from '../BooksList/index.config';

const BooksLoading = () => {
  const pageCount = useSelector(getActivePerPageCount);
  return (
    <>
      {[...Array(pageCount)].map((count, index) => (
        <Table.Row key={index} isGhost>
          {bookTableConfig.map((tableHeader) => (
            <Table.Cell
              key={`row-${index}-${tableHeader.id}`}
              title={tableHeader.mobile_name}
              styling={{ ...tableHeader.styling, height: '30px' }}
            />
          ))}
        </Table.Row>
      ))}
    </>
  );
};
export default BooksLoading;
