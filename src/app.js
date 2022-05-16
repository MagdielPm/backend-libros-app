import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import bookRoutes from "./routes/book.routes";
import adminRoutes from "./routes/admin.routes";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/admins", adminRoutes);

export default app;
