import z from "zod";
import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import evaluationModal from "../evaluation/evaluation.model.js";
import jobModal from "./job.model.js";
import { jobScanSchema } from "./job.schema.js";
import { parseWithAI } from "../services/openAI.service.js";
import jobScanPrompt from "../prompt/jobScan.prompt.js";

const scanNewJob = asyncHandler(async (req, res) => {
  // validate input
  const validate = jobScanSchema.safeParse(req.body);
  if (!validate.success) {
    const message = z.prettifyError(validate.error);
    throw new apiError(400, message, "VALIDATION");
  }
  // get user evaluation info
  const user = await evaluationModal
    .findOne({ userId: req.user._id })
    .select("+skills +experience +userSummary");
  if (!user) {
    throw new apiError(403, "Anautrized Request! Login first");
  }
  // prepare prompt
  const prompt = jobScanPrompt
    .replace("{{USER_INFO}}", JSON.stringify(user))
    .replace("{{JOB_DESCRIPTION}}", validate.data.jobDescription);

  // parse to llm
  const llm = await parseWithAI(prompt);
  const aiRes = JSON.parse(llm);

  // save on db
  const job = await jobModal.create({
    jobId: validate.data.jobId,
    url: validate.data.url,
    companyName: validate.data.companyName,
    userId: req.user._id,
    ...aiRes,
  });
  if (!job) {
    throw new apiError(500, "internal server error!");
  }
  return res.status(201).json(new apiResponse(201, "job scanned successfully", job));
});

const getJobs = asyncHandler(async (req, res) => {
  // get page and limit
  const pageNo = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // get jobs
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    throw new apiError(400, "Invalid user id", "VALIDATION");
  }
  const jobs = await jobModal.aggregate([
    {
      $match: { userId: req.user._id }, // match user id
    },
    {
      $sort: { createdAt: -1 }, // latest first
    },
    {
      $project: {
        _id: 1,
        jobId: 1,
        url: 1,
        companyName: 1,
        title: 1,
        savedJob: 1,
        score: 1,
      }, // project min filed
    },
  ]);
  const totalJobs = await jobModal.aggregate([
    {
      $group: {
        // total jobs and saved jobs count
        _id: null,
        totalDocs: { $sum: 1 },
        totalSavedJobs: {
          $sum: {
            $cond: [{ $eq: ["$savedJob", true] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 0, // remove _id
        totalDocs: 1,
        totalSavedJobs: 1,
      },
    },
  ]);

  if (!jobs) {
    throw new apiError(404, "jobs not found!");
  }
  return res.status(200).json(
    new apiResponse(200, "all job by user fetched successfully", {
      totalJobs: totalJobs[0].totalDocs,
      totalSavedJobs: totalJobs[0].total,
      jobs,
    })
  );
});

const getJobWithId = asyncHandler(async (req, res) => {
  //  get id and convert in valid id
  const jobId = new mongoose.Types.ObjectId(req.params.jobId);

  const job = await jobModal.aggregate([{ $match: { userId: req.user._id, _id: jobId } }]);
  if (!job) {
    throw new apiError(404, "job not found!");
  }
  return res.status(200).json(new apiResponse(200, "all job by user fetched successfully", job));
});

export { scanNewJob, getJobs, getJobWithId };
