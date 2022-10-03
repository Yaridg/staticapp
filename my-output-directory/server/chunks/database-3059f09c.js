import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const uri = process.env["MONGODB_URI"];
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}
let client = new MongoClient(uri);
const db_connect = async (database) => {
  await client.connect();
  return client.db(database);
};

export { db_connect as d };
//# sourceMappingURL=database-3059f09c.js.map
