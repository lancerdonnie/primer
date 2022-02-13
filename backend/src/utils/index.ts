import type { IData } from 'types';
import { MAX } from 'constants_';

export const validateNumber = (data: IData) => {
  if (!data?.hasOwnProperty('input')) return 'input field is required';
  if (typeof data.input !== 'number') return 'input field should be a number';
  if (data.input > MAX) return `maximum number allowed is ${MAX}`;
};
