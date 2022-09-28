exports.up = async function (knex) {
  await knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("user_name", 30).notNullable().unique();
    table.string("user_email").notNullable().unique();
    table.string("password", 80).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("user");
};
