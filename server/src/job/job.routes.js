import { Router } from "express";
import { scanNewJob } from "./job.controller.js";
import authChecker from "../middlewares/auth.middleware.js";
const router = Router();

// routes defined here - protect routes
router.post("/scan", authChecker, scanNewJob);

export default router;