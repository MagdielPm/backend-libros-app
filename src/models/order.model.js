import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

// Model for oder 🧾

const Order = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER,
  },
  total: {
    type: Sequelize.INTEGER,
  },
});

export default Order;
