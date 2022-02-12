import type { IPrime } from 'types';
import db from '../db';
import { GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { TABLE } from '../constants_';

const getCachedResult = async (number: number): Promise<IPrime | undefined> => {
  try {
    const { Item } = await db.send(
      new GetItemCommand({
        TableName: TABLE,
        Key: marshall({ number }),
      })
    );

    return Item ? (unmarshall(Item) as IPrime) : undefined;
  } catch (error) {
    console.log(error);
  }
};

const cacheResult = async (input: IPrime) => {
  try {
    await db.send(
      new PutItemCommand({
        TableName: TABLE,
        Item: marshall(input),
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export { getCachedResult, cacheResult };
