import type { APIGatewayProxyEvent, Handler } from 'aws-lambda';
import { CustomError } from 'error';
import { getPrime } from 'services/prime';
import { HEADERS } from 'constants_';

export const prime: Handler = async (event: APIGatewayProxyEvent) => {
  try {
    const result = await getPrime(JSON.parse(event.body || '{}'));

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: HEADERS,
    };
  } catch (err) {
    if (err instanceof CustomError)
      return {
        statusCode: err.statusCode,
        body: err.message,
      };
    console.log(err);
    return {
      statusCode: 500,
      body: 'Something went wrong',
    };
  }
};
