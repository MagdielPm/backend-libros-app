import { Router } from "express";
import {
  adminLogin,
  createAdmin,
  getUser,
} from "../controllers/admin.controller";

import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

router.post("/login", adminLogin);
router.post("/signup", createAdmin);

router.use(verifyMyActiveToken);

router.get("/user/:id", getUser);

export default router;
