import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

// Model for book 📚

const Book = sequelize.define("books", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncremet: true,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.STRING,
  },
  isbn: {
    type: Sequelize.INTEGER,
  },
});

export default Book;
