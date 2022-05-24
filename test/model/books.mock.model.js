import MockDBConnection from "../mock/db.mock";

const Book = MockDBConnection.define("Books", [
  {
    id: 1,
    image: "example.com",
    title: "example",
    author: "Jhon Example",
    price: 20,
    description: "Lorem ipsum",
    isbn: 12345,
  },
]);

export default Book;
