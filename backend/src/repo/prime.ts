import type { IPrime } from 'types';
import db from '../db';
import { GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { TABLE } from '../constants_';

const getCachedResult = async (input: number): Promise<IPrime | undefined> => {
  const { Item } = await db.send(
    new GetItemCommand({
      TableName: TABLE,
      Key: marshall({ input }),
    })
  );

  return Item ? (unmarshall(Item) as IPrime) : undefined;
};

const cacheResult = async (input: IPrime) => {
  await db.send(
    new PutItemCommand({
      TableName: TABLE,
      Item: marshall(input),
    })
  );
};

export { getCachedResult, cacheResult };
