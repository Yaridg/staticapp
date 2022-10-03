import { d as db_connect } from './database-3059f09c.js';
import { ObjectId } from 'mongodb';
import { e as error } from './index2-93776cd1.js';
import { s as serializeMongoData } from './wrappers-aab3db0c.js';
import 'dotenv';

const load = async ({ params }) => {
  const db_client = await db_connect("vico_db");
  const collection = db_client.collection("users");
  const users = await collection.find().toArray();
  let results = await serializeMongoData(users);
  if (results) {
    return results;
  }
  throw error(404, "Not found");
};
const actions = {
  addUser: async ({ request }) => {
    const db_client = await db_connect("vico_db");
    const collection = db_client.collection("users");
    const values = await request.formData();
    const username = values.get("username");
    const firstname = values.get("firstname");
    const lastname = values.get("lastname");
    const email = values.get("email");
    const status = values.get("status");
    const role = values.get("role");
    const user = {
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "status": status,
      "role": role
    };
    await collection.insertOne(user);
    return { success: true };
  },
  editUser: async ({ request }) => {
    const db_client = await db_connect("vico_db");
    const collection = db_client.collection("users");
    const values = await request.formData();
    const _id = values.get("_id");
    const username = values.get("username");
    const firstname = values.get("firstname");
    const lastname = values.get("lastname");
    const email = values.get("email");
    const status = values.get("status");
    const role = values.get("role");
    const user = {
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "status": status,
      "role": role
    };
    await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: user
      }
    );
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-927e0d78.js')).default;
const file = '_app/immutable/components/pages/admin/users/_page.svelte-98334fe0.js';
const imports = ["_app/immutable/components/pages/admin/users/_page.svelte-98334fe0.js","_app/immutable/chunks/index-bd0e4065.js","_app/immutable/chunks/wrappers-4a0a63b7.js","_app/immutable/chunks/Modal-565acd29.js","_app/immutable/chunks/index-9de28fd4.js"];
const stylesheets = ["_app/immutable/assets/Modal-bd054a2f.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-a9ef4d90.js.map
