import { CustomError } from 'error';
import { cacheResult, getCachedResult } from 'repo';
import type { IPrime } from '../types';

const MAX = 100;
const DISTANCE = 1;

const isPrime = (num: number) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 2; i < Math.ceil(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const calculateDistance = (input: number): IPrime => {
  let result = [];
  const leftNumber = input - DISTANCE;
  const rightNumber = input + DISTANCE;

  if (isPrime(leftNumber)) result.push(leftNumber);
  else result.push(null);

  if (isPrime(rightNumber) && input < MAX) result.push(rightNumber);
  else result.push(null);

  return { leftPrime: result[0], rightPrime: result[1], number: input };
};

const validate = (input?: any) => {
  if (typeof input !== 'number') return 'number type is required';
  if (input > MAX) return `maximum number allowed is ${MAX}`;
};

const getPrime = async (input: number): Promise<IPrime> => {
  const error = validate(input);
  if (error) throw new CustomError(error, 400);
  const cachedResult = await getCachedResult(input);
  if (cachedResult) return cachedResult;
  const result = calculateDistance(input);
  await cacheResult(result);
  return result;
};

export { getPrime };
