import { render, screen } from '@testing-library/react';
import Screen from '../components/screen/Screen';

test('renders screen', () => {
  render(<Screen display={9000} />);
  const linkElement = screen.getByText(/9000/i);
  expect(linkElement).toBeInTheDocument();
});
