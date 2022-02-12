import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('Home', () => {
  it('Home renders', () => {
    render(<Home />);

    const button = screen.getByText('Generate');
    const heading = screen.getByText(
      'Generate prime numbers that are equi-distant from a number'
    );

    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
