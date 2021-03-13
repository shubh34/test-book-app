import App from './App';
import { setUpComponent } from '../test/utils';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  setUpComponent(App);
  const linkElement = screen.getByText(/Heya/i);
  expect(linkElement).toBeInTheDocument();
});
