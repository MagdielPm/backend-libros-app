import { Router } from "express";
import { getAllBooks } from "../controllers/books.controller";

const router = Router();

router.get("/", getAllBooks);

export default router;
