import { Router } from "express";
import {
  getUserById,
  userLogin,
  createNewUser,
  getUsers,
  deleteUserById,
  updateUser,
} from "../controllers/users.controller";

import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

router.post("/login", userLogin);
router.post("/signup", createNewUser);

router.use(verifyMyActiveToken);

router.get("/user/:id", getUserById);
router.get("(/user/", getUsers);
router.delete("/user/:id", deleteUserById);
router.put("/user/:id", updateUser);

export default router;
