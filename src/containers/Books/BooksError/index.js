import PageHeader from '../../../components/PageHeader';

const BooksError = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px'
      }}
    >
      <PageHeader header="Something Gone Wrong!!! Please try later"> </PageHeader>
    </div>
  );
};
export default BooksError;
