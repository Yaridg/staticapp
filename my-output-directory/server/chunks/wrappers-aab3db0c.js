const serializeMongoData = async (data) => {
  return JSON.parse(JSON.stringify(data));
};
const deserializeMongoData = (data) => {
  let arr = [];
  for (const [key, value] of Object.entries(data)) {
    arr = [...arr, value];
  }
  return arr;
};

export { deserializeMongoData as d, serializeMongoData as s };
//# sourceMappingURL=wrappers-aab3db0c.js.map
