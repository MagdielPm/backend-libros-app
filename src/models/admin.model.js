import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

// Model for user 🙋🏻

const Admin = sequelize.define("admins", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

export default Admin;
