import PageHeader from '../../../components/PageHeader';

const BooksNotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px'
      }}
    >
      <PageHeader header="No Books found!!"> </PageHeader>
    </div>
  );
};
export default BooksNotFound;
