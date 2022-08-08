import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator/Calculator';

test('renders calculator', () => {
  render(<Calculator />);

  const calculatorElement = screen.getByTestId('calculator');
  expect(calculatorElement).toBeInTheDocument();
});
