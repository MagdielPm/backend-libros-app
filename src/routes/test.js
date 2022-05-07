import { Router } from "express";
import { serverRunning } from "../controllers/test.controller";

const router = Router();

router.get("/running", serverRunning);

export default router;
