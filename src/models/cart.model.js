import Sequelize from "sequelize";
import { sequelize } from "../connection/database";
import User from "./user.model";

// Model for cart 🛒

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantitu: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
});

export default Cart;
