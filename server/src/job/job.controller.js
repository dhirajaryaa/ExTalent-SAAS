import z from "zod";
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
    companyName : validate.data.companyName,
    userId: req.user._id,
    ...aiRes,
  });
  if (!job) {
    throw new apiError(500, "internal server error!");
  }
  return res.status(201).json(new apiResponse(201, "job scanned successfully", job));
});

export { scanNewJob };
