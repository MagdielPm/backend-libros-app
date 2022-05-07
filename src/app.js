import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

import testRoute from "./routes/test";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.use("/api/test", testRoute);

export default app;
