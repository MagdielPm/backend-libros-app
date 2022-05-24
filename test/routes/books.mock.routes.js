import { Router } from "express";
import { getAllBooks } from "../controller/book.mock.controller";

const router = Router();

router.get("/", getAllBooks);

export default router;
