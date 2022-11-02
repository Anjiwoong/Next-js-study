import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://jiwoong:h3zuqOscI984s1sg@cluster0.c4zs7ly.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
};
