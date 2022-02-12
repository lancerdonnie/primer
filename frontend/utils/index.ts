import { IPrime } from 'types';

export const Axios = {
  post: (_: string, payload: { number: number }): Promise<{ data: IPrime }> =>
    new Promise((res) => {
      res({
        data: {
          leftPrime: 5,
          rightPrime: 6,
          number: 7,
        },
      });
    }),
};

const MAX = 100;

export const validate = (input: any) => {
  if (input === '' || input === undefined) return 'input is required';
  if (isNaN(input)) return `input must be a number`;
  if (Number(input) > MAX) return `input must be a greater than ${MAX}`;
};
