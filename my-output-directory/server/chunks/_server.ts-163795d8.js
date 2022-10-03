import { d as db_connect } from './database-3059f09c.js';
import { j as json } from './index2-93776cd1.js';
import 'dotenv';
import 'mongodb';

const POST = async ({ request }) => {
  try {
    const db_client = await db_connect("vico_db");
    const formData = await request.json();
    const formName = formData[0].formName;
    let [, ...formFields] = formData;
    await db_client.createCollection(formName);
    const collection = db_client.collection(formName);
    for (const obj of formFields) {
      await collection.insertOne(obj);
    }
    return json("success");
  } catch (error) {
    return json("error");
  }
};

export { POST };
//# sourceMappingURL=_server.ts-163795d8.js.map
