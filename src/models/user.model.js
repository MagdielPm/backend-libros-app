import Sequelize from "sequelize";
import { sequelize } from "../connection/database";
import Cart from "./cart.model";

// Model for user 🙋🏻

const User = sequelize.define("users", {
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

export default User;
