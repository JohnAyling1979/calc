import { render, screen } from '@testing-library/react';
import Button from '../components/button/Button';

test('renders button', () => {
  render(<Button value={8} />);
  const linkElement = screen.getByText(/8/i);
  expect(linkElement).toBeInTheDocument();
});
