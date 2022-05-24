import MockDBConnection from "../mock/db.mock";

const User = MockDBConnection.define("Users", [
  {
    id: 1,
    fullName: "Manuel Perez",
    email: "manuel@hotmail.com",
    password: "123test",
  },
  {
    id: 2,
    fullName: "Marisol Pillar",
    email: "marysol@hotmail.com",
    password: "123test",
  },
]);

export default User;
