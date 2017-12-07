import * as Sequelize from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "1", {
  dialect: "postgres",
  operatorsAliases: false //fix warning connect
})

export default sequelize