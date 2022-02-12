import { render, screen, fireEvent } from '@testing-library/react';
import Input from 'components/Form/Input';

describe('Input Component', () => {
  beforeEach(() => {
    render(<Input data-testid="input" />);
  });

  test('Expect input to render', () => {
    const text = screen.getByTestId('input');
    fireEvent.change(text, { target: { value: 'demo' } });
    expect(text).toHaveDisplayValue('demo');
  });
});
