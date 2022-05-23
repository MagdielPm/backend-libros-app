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

router.get("/:id", getUserById);
router.get("(/", getUsers);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUser);

export default router;
