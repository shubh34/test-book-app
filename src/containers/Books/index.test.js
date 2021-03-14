import { setUpConnectedComponent } from '../../../test/utils';

import Books from './';


describe('Books', () => {
  it('should render Books', () => {
    const hasThunk = true;
    const { container } = setUpConnectedComponent({
      Component: Books,
      props: {},
      stateKey: 'DEFAULT_WITH_BOOKS',
      hasThunk
    });
    expect(container).toMatchSnapshot();
  });
});
