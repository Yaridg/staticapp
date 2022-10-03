import { d as db_connect } from './database-3059f09c.js';
import { ObjectId } from 'mongodb';
import { j as json } from './index2-93776cd1.js';
import 'dotenv';

const DELETE = async ({ request }) => {
  try {
    const db_client = await db_connect("vico_db");
    const collection = db_client.collection("users");
    const user = await request.json();
    await collection.deleteOne({ "_id": new ObjectId(user._id) });
    return json("success");
  } catch (error) {
    return {
      status: 500,
      body: {
        error: "A server error occured!"
      }
    };
  }
};

export { DELETE };
//# sourceMappingURL=_server.ts-830b68c2.js.map
