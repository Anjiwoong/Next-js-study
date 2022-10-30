import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://jiwoong:6yWToZIQ9gpUgK5j@cluster0.c4zs7ly.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db('events');

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  project,
  client,
  collection,
  sort,
  filter = {}
) => {
  const db = client.db(project);

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
