import express from "express";
import { deleteUserAccount, getUserProfile } from "./user.controller.js";
import authChecker from "../middlewares/auth.middleware.js";

const router = express.Router();

// routes defined here - protect routes
router.get("/profile", authChecker, getUserProfile);
// delete user account after 30days
router.delete("/profile", authChecker, deleteUserAccount);

export default router;
