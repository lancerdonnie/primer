import type { IPrime } from 'types';
import db from '../db';

// body = await db
//   .scan({ TableName: event.queryStringParameters.TableName })
//   .promise();
// break;
// body = await db.put(JSON.parse(event.body)).promise();
// break;

const getCachedResult = (input: number): Promise<IPrime | undefined> => {
  return new Promise((resolve, reject) => {
    return resolve(undefined);
  });
};

const cacheResult = (input: IPrime): Promise<IPrime | undefined> => {
  return new Promise((resolve, reject) => {
    return resolve(undefined);
  });
};

export { getCachedResult, cacheResult };
