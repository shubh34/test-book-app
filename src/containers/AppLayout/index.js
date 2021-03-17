import Menu from '../Menu';
import Footer from '../Footer';
import AppRoutes from '../AppRoutes';

export const AppLayout = () => {
  return (
    <>
      <Menu />
      <div style={{ minHeight: '90vh' }}>
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
};
