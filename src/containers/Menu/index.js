import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Menu = () => (
  <header style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ padding: '24px' }}>My Books Store</h2>
    <nav>
      <Link to={routes.BOOKS.resolve()}>Home</Link>
    </nav>
  </header>
);
export default Menu;
