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
  it('should render Books in Loading State', () => {
    const hasThunk = true;
    const { container } = setUpConnectedComponent({
      Component: Books,
      props: {},
      stateKey: 'BOOKS_WITH_API_IN_PROGRESS',
      hasThunk
    });
    expect(container).toMatchSnapshot();
  });
  it('should render Books Not Found', () => {
    const hasThunk = true;
    const { container } = setUpConnectedComponent({
      Component: Books,
      props: {},
      stateKey: 'DEFAULT',
      hasThunk
    });
    expect(container).toMatchSnapshot();
  });
  it('should render Books Not Found when error', () => {
    const hasThunk = true;
    const { container } = setUpConnectedComponent({
      Component: Books,
      props: {},
      stateKey: 'BOOKS_WITH_API_FAILURE',
      hasThunk
    });
    expect(container).toMatchSnapshot();
  });
});
