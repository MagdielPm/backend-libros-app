"use strict";
import bcrypt from "bcrypt";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const encryptedPassword = bcrypt.hashSync("superadmin123", 10);
    await queryInterface.bulkInsert("admins", [
      {
        id: 1,
        userName: "Super admin",
        email: "admin@gmail.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("books", [
      {
        id: 1,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61YFN5RUm3L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        title: "La teoría del todo",
        author: "Stephen Hawking",
        price: 164,
        description:
          "Los tacos al pastor saben ricos y más cuando hablamos de la teoría del todo porque esa teoría habla sobre ponerle de todo a los taquitos ricos que nos podemos comprar en cualquier calle de nuestro bello México.",
        isbn: 12345,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61YFN5RUm3L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        title: "La teoría del todo",
        author: "Stephen Hawking 2",
        price: 164,
        description:
          "Una manera clara y amena de acercarse a los misterios del universo. En esta esclarecedora obra, el gran físico británico Stephen Hawking nos ofrece una historia del universo, del big bang a los agujeros negros.",
        isbn: 12345,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61YFN5RUm3L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        title: "La teoría del todo",
        author: "Stephen Hawking 3",
        price: 164,
        description:
          "Una manera clara y amena de acercarse a los misterios del universo. En esta esclarecedora obra, el gran físico británico Stephen Hawking nos ofrece una historia del universo, del big bang a los agujeros negros.",
        isbn: 12345,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
