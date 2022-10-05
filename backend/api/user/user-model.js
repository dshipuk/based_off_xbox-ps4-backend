const db = require("../../db/db-config");

async function all() {
  return await db("users");
}

module.exports = {
  all,
};
