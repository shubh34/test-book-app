import NotFound from '.';
import { setUpComponent } from '../../../test/utils';

test('renders render not page not found', () => {
  const { container } = setUpComponent(NotFound);
  expect(container).toMatchSnapshot();
});
