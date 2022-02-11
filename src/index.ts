import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { APIGatewayProxyEvent, Handler } from 'aws-lambda';

const client = new DynamoDBClient({});

const headers = {
  'Content-Type': 'application/json',
};

export const prime: Handler = async (event: APIGatewayProxyEvent, context) => {
  try {
    // body = await dynamo
    //   .scan({ TableName: event.queryStringParameters.TableName })
    //   .promise();
    // break;
    // body = await dynamo.put(JSON.parse(event.body)).promise();
    // break;
  } catch (err) {}

  return {
    statusCode: 200,
    body: { hello: 'hello world' },
    headers,
  };
};
