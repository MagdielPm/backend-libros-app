import { Router } from "express";
import { getAllUsers, signUp } from "../controller/user.mock.controller";

const router = Router();

router.post("/", signUp);
router.get("/", getAllUsers);

export default router;
