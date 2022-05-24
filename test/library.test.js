import supertest from "supertest";
import app from "./app.mock";

describe("Get all the users", () => {
  it("Should response all the mock elements", async () => {
    const response = await supertest(app).get("/api-mock/users");
    expect(response.body).toEqual({
      data: [
        {
          id: 1,
          fullName: "Manuel Ku Lozano",
          email: "manuel@hotmail.com",
          password: "123test",
        },
        {
          id: 2,
          fullName: "Marisol Pillar",
          email: "marysol@hotmail.com",
          password: "123test",
        },
      ],
    });
  });
});

describe("Get all the books", () => {
  it("Should response all the mock elements", async () => {
    const response = await supertest(app).get("/api-mock/books");
    expect(response.body).toEqual({
      data: {
        id: 1,
        image: "example.com",
        title: "example",
        author: "Jhon Example",
        price: 20,
        description: "Lorem ipsum",
        isbn: 12345,
      },
    });
  });
});

describe("Sign Up for users", () => {
  it("Should return the new user account", async () => {
    const response = await supertest(app).post("/api-mock/users");
    expect(response.body).toEqual({
      data: {
        id: 1,
        fullName: "Alma Marcela Silva de Alegría",
        email: "marijuana@hotmail.com",
        password: "123test",
      },
    });
  });
});
