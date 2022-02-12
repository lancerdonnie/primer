import { configure, fireEvent, render, screen } from '@testing-library/react';
import PrimeForm from 'components/PrimeForm';

configure({ testIdAttribute: 'name' });

test('Expect to be able to enter input and submit', () => {
  render(<PrimeForm setError={jest.fn()} setNumbers={jest.fn()} />);

  const onSubmit = jest.fn();

  const input = screen.getByTestId('input') as HTMLInputElement;
  const button = screen.getByText('Generate');
  const form = screen.getByTestId('form');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '5' } });

  expect(input.value).toBe('5');
  form.onsubmit = onSubmit;
  fireEvent.click(button);

  expect(onSubmit).toHaveBeenCalled();
});
