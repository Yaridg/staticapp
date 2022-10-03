import { d as db_connect } from './database-3059f09c.js';
import 'mongodb';
import { e as error } from './index2-93776cd1.js';
import { s as serializeMongoData } from './wrappers-aab3db0c.js';
import 'dotenv';

const load = async ({ params }) => {
  const db_client = await db_connect("vico_db");
  const collection = db_client.collection("Prisoners");
  const prisoners = await collection.find().toArray();
  let results = await serializeMongoData(prisoners);
  if (results) {
    return results;
  }
  throw error(404, "Not found");
};
const actions = {
  addPrisoner: async ({ request }) => {
    const db_client = await db_connect("vico_db");
    const collection = db_client.collection("Prisoners");
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    await collection.insertOne(data);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-18d8f98b.js')).default;
const file = '_app/immutable/components/pages/inmates/_page.svelte-1df937d8.js';
const imports = ["_app/immutable/components/pages/inmates/_page.svelte-1df937d8.js","_app/immutable/chunks/index-bd0e4065.js","_app/immutable/chunks/wrappers-4a0a63b7.js","_app/immutable/chunks/Modal-565acd29.js","_app/immutable/chunks/index-9de28fd4.js"];
const stylesheets = ["_app/immutable/assets/Modal-bd054a2f.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=5-da20a577.js.map
