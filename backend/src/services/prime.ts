import { FIRST_PRIME_NUMBER } from '../constants_';
import { CustomError } from 'error';
import { cacheResult, getCachedResult } from 'repo';
import type { IPrime, IData } from '../types';
import { validateNumber } from 'utils';

const isPrime = (num: number) => {
  if (num < FIRST_PRIME_NUMBER) return false;
  if (num === FIRST_PRIME_NUMBER) return true;
  if (num % 2 === 0) return false;

  for (let i = 2; i < Math.ceil(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const calculateDistance = (input: number): IPrime => {
  if (input < FIRST_PRIME_NUMBER)
    return {
      leftPrime: null,
      rightPrime: FIRST_PRIME_NUMBER,
      number: input,
    };

  let distance = 0;
  let maxDistance = 1000;

  while (distance < maxDistance) {
    distance++;
    const leftSide = input - distance;
    const rightSide = input + distance;
    const leftSideisPrime = isPrime(leftSide);
    const rightSidePrime = isPrime(rightSide);
    if (leftSideisPrime || rightSidePrime) {
      return {
        leftPrime: leftSideisPrime ? leftSide : null,
        rightPrime: rightSidePrime ? rightSide : null,
        number: input,
      };
    }
  }
  return { leftPrime: null, rightPrime: null, number: input };
};

const getPrime = async (data: IData): Promise<IPrime> => {
  const error = validateNumber(data);
  if (error) throw new CustomError(error, 400);
  const cachedResult = await getCachedResult(data.input!);
  if (cachedResult) return cachedResult;
  const result = calculateDistance(data.input!);
  await cacheResult(result);
  return result;
};

export { getPrime };
