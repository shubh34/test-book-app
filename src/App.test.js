import App from './App';
import { setUpComponent } from '../test/utils';

test('renders learn react link', () => {
  const { container } = setUpComponent(App);
  expect(container).toMatchSnapshot();
});
