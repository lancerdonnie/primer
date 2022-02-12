import type { APIGatewayProxyEvent, Handler } from 'aws-lambda';
import { CustomError } from 'error';
import { getPrime } from 'services/prime';
import { HEADERS } from 'constants_';

export const prime: Handler = async (event: APIGatewayProxyEvent) => {
  let statusCode = 500;
  let body = {};

  try {
    console.log(event.body);
    const result = await getPrime(JSON.parse(event.body || '{}'));

    statusCode = 200;
    body = JSON.stringify(result);
  } catch (err) {
    console.log(err);

    if (err instanceof CustomError) {
      statusCode = err.statusCode;
      body = err.message;
    } else {
      statusCode = 500;
      body = 'Something went wrong';
    }
  }

  return {
    headers: HEADERS,
    statusCode,
    body,
  };
};
