// import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Handler,
} from 'aws-lambda';

// const client = new DynamoDBClient({});

const headers = {
  'Content-Type': 'application/json',
};
export const prime: Handler = async (event: any) => {
  try {
    // body = await dynamo
    //   .scan({ TableName: event.queryStringParameters.TableName })
    //   .promise();
    // break;
    // body = await dynamo.put(JSON.parse(event.body)).promise();
    // break;
    return {
      statusCode: 200,
      body: JSON.stringify(event),
      headers,
    };
  } catch (err) {
    return {
      statusCode: 500,
      // body: err,
      body: '',
    };
  }
};
