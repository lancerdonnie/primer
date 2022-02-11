import type { APIGatewayProxyEvent, Handler } from 'aws-lambda';
import { CustomError } from 'error';
import { getPrime } from 'services/prime';

const headers = {
  'Content-Type': 'application/json',
};
export const prime: Handler = async (event: APIGatewayProxyEvent) => {
  try {
    const result = await getPrime(JSON.parse(event.body || '{}')?.number);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers,
    };
  } catch (err) {
    if (err instanceof CustomError)
      return {
        statusCode: err.statusCode,
        body: err.message,
      };

    return {
      statusCode: 500,
      body: 'Something went wrong',
    };
  }
};
