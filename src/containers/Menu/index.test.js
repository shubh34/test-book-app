import Menu from '.';
import { setUpConnectedComponent } from '../../../test/utils';

test('renders render Menu', () => {
  const { container } = setUpConnectedComponent({
    Component: Menu
  });
  expect(container).toMatchSnapshot();
});
