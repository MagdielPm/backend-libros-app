import { Router } from "express";
import { getAllBooks } from "../controllers/books.controller";

import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

router.use(verifyMyActiveToken);

router.get("/", getAllBooks);

export default router;
