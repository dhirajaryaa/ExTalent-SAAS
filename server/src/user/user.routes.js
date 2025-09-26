import express from "express";
import { getUserProfile } from "./user.controller.js";
import authChecker from "../middlewares/auth.middleware.js"

const router = express.Router();

// routes defined here - protect routes
router.get("/profile",authChecker,getUserProfile)

export default router;