import { Router } from "express";
import { deleteJob, getJobs, getJobWithId, savedJobs, scanNewJob } from "./job.controller.js";
import authChecker from "../middlewares/auth.middleware.js";
const router = Router();

// routes defined here - protect routes
router.post("/scan", authChecker, scanNewJob);
// get jobs 
router.get("/", authChecker, getJobs);
// get job with id
router.get("/:jobId", authChecker, getJobWithId);
// save job with id
router.put("/:jobId", authChecker, savedJobs);
// delete job with id
router.delete("/:jobId", authChecker, deleteJob);

export default router;