const db = require("../../db/db-config");

async function all() {
  return await db("users");
}

async function findByName(name) {
  return await db("users").where("user_name", name);
}

async function findById(id) {
  return await db("users").where("user_id", id);
}

module.exports = {
  all,
  findByName,
  findById,
};
