const users = [
  {
    user_name: "testDummy1",
    user_email: "test1@gmail.com",
    password: "testpassword",
  },
];

exports.seed = async function (knex) {
  await knex("users").insert(users);
};
