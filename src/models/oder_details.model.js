import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

// Model for order details 📄

const OrderDetails = sequelize.define("oder_details", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

export default OrderDetails;
