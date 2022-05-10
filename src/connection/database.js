import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-library", "", "", {
  host: "localhost",
  dialect: "postgres",
});
