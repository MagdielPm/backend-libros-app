import { Router } from "express";
import {
  getAllBooks,
  createNewBook,
  deleteBookById,
  updateABook,
  getBookById,
} from "../controllers/books.controller";

import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

router.get("/", getAllBooks);
router.use(verifyMyActiveToken);
router.post("/", createNewBook);
router.get("/:id", getBookById);
router.delete("/:id", deleteBookById);
router.put("/:id", updateABook);

export default router;
