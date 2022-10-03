import { d as db_connect } from './database-3059f09c.js';
import 'mongodb';
import { j as json } from './index2-93776cd1.js';
import 'dotenv';

const POST = async ({ request }) => {
  try {
    const collectionName = await request.json();
    const db_client = await db_connect("vico_db");
    const data = await db_client.collection(collectionName).find().toArray();
    return json(data);
  } catch (error) {
    return {
      status: 500,
      body: {
        error: "A server error occured!"
      }
    };
  }
};

export { POST };
//# sourceMappingURL=_server.ts-40eedbad.js.map
