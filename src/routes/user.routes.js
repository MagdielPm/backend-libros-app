import { Router } from "express";
import {
  getUser,
  userLogin,
  createNewUser,
} from "../controllers/users.controller";

import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

router.post("/login", userLogin);
router.post("/signup", createNewUser);

router.use(verifyMyActiveToken);

router.get("/user/:id", getUser);

export default router;
