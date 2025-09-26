import express from "express";
import { deleteUserAccount, getUserProfile, userProfileUpdate, userSkillsUpdate } from "./user.controller.js";
import authChecker from "../middlewares/auth.middleware.js";

const router = express.Router();

// routes defined here - protect routes
router.get("/profile", authChecker, getUserProfile);
// profile update
router.put("/profile", authChecker, userProfileUpdate);
// skills update
router.patch("/profile/skills", authChecker, userSkillsUpdate);
// delete user account after 30days
router.delete("/profile", authChecker, deleteUserAccount);

export default router;
