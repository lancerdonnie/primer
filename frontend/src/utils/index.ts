import { IPrime } from 'types';
import axios from 'axios';

const bASE_URL =
  'https://phmx1r5ac9.execute-api.us-east-2.amazonaws.com/default/prime';

export const Axios = axios.create({
  baseURL: bASE_URL,
});

const MAX = 100;

export const validate = (input: any) => {
  if (input === '' || input === undefined) return 'input is required';
  if (isNaN(input)) return `input must be a number`;
  if (Number(input) > MAX) return `input must be a greater than ${MAX}`;
};
