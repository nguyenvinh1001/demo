import * as Knex from "knex";

const knex = Knex({
  client : "pg",
  version: "7.4",
  connection: {
    host: "localhost",
    password: "",
    user: "postgres",
    database: "postgres"
  }
})

export default knex;