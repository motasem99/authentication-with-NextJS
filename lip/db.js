const { MongoClient } = require('mongodb');

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://mutasem-NextjsProject:2741999@cluster0.6sm4t.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
