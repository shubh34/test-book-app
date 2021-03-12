import userEvent from '@testing-library/user-event';
import Button from '.';
import { setUpComponent } from '../../../test/utils';

const setProps = (setUpProps = {}) => ({
  id: 'button-id',
  name: 'Button name',
  onClick: jest.fn(),
  ...setUpProps
});

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = setUpComponent(Button, setProps());
    expect(container).toMatchSnapshot();
  });
  it('should handle onClick', () => {
    const { getByTestId, props } = setUpComponent(Button, setProps());
    userEvent.click(getByTestId(props.id));
    expect(props.onClick).toBeCalled();
  });
});
