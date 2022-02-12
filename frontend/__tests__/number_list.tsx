import { configure, render, screen } from '@testing-library/react';
import NumberList from 'components/NumberList';

configure({ testIdAttribute: 'id' });

const numbers = Array.from({ length: 20 }).map((_) => ({
  leftPrime: 999,
  number: 888,
  rightPrime: 777,
}));

describe('Number List', () => {
  test('Expect list to render correct number of items', () => {
    const { rerender } = render(<NumberList numbers={[numbers[0]]} />);

    let list = screen.getAllByTestId('list-item');
    expect(list).toHaveLength(1);
    rerender(<NumberList numbers={numbers} />);
    list = screen.getAllByTestId('list-item');
    expect(list).toHaveLength(numbers.length);
  });

  test('Expect list to render item', () => {
    render(<NumberList numbers={[numbers[0]]} />);

    let case1 = screen.getByText('999');
    let case2 = screen.getByText('888');
    let case3 = screen.getByText('777');

    expect(case1).toBeInTheDocument();
    expect(case2).toBeInTheDocument();
    expect(case3).toBeInTheDocument();
  });
});
