import { PRIME } from '../constants_';
import { CustomError } from 'error';
import { cacheResult, getCachedResult } from 'repo';
import type { IPrime } from '../types';

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
  const leftNumber = input - PRIME.DISTANCE;
  const rightNumber = input + PRIME.DISTANCE;

  if (isPrime(leftNumber)) result.push(leftNumber);
  else result.push(null);

  if (isPrime(rightNumber) && input < PRIME.MAX) result.push(rightNumber);
  else result.push(null);

  return { leftPrime: result[0], rightPrime: result[1], number: input };
};

const validate = (input?: any) => {
  if (!input?.number) return 'number field is required';
  if (typeof input.number !== 'number')
    return 'number field should be a number';
  if (input > PRIME.MAX) return `maximum number allowed is ${PRIME.MAX}`;
};

const getPrime = async (data: { number: number }): Promise<IPrime> => {
  const error = validate(data);
  if (error) throw new CustomError(error, 400);
  const cachedResult = await getCachedResult(data.number);
  if (cachedResult) return cachedResult;
  const result = calculateDistance(data.number);
  await cacheResult(result);
  return result;
};

export { getPrime };
