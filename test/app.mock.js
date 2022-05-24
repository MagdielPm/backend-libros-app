import express, { json } from "express";

import booksMockRoutes from "./routes/books.mock.routes";
import usersMockRoutes from "./routes/users.mock.routes";

const app = express();

app.use(json());

app.use("/api-mock/books", booksMockRoutes);
app.use("/api-mock/users", usersMockRoutes);

export default app;
