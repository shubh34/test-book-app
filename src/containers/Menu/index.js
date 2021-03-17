import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Menu = () => (
  <header style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
    <h2 style={{ padding: '16px 16px 16px 0' }}>My Books Store</h2>
    <nav>
      <Link to={routes.BOOKS.resolve()}>Home</Link>
    </nav>
  </header>
);
export default Menu;
