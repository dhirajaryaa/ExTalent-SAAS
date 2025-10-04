import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModal from "../user/user.model.js";
import evaluationModal from "./evaluation.model.js";
import { extractTextFromPDF } from "../services/resume.service.js";
import { parseWithAI } from "../services/openAI.service.js";
import githubInfoExtractor from "../services/github.service.js";
import resumeEvaluationPrompt from "../prompt/resume.prompt.js";
import githubEvaluationPrompt from "../prompt/github.prompt.js";

const profileResumeEvaluate = asyncHandler(async (req, res) => {
  //get resume
  const user = await userModal.findById(req.user._id);
  // send to pdf parser services
  const rowText = await extractTextFromPDF(user.resume?.url);
  if (!rowText) {
    throw new apiError(400, "failed to parse resume! try again");
  }
  // prompt setup
  const prompt = resumeEvaluationPrompt.replace("{{RESUME_TEXT}}", rowText);
  //* send to llm
  const aiRes = await parseWithAI(prompt);
  const genAIRes = JSON.parse(aiRes);

  // save on db
  const evaluation = await evaluationModal.create({
    userId: req.user._id,
    pdfRowText: rowText,
    skills: genAIRes?.skills || [],
    experience: genAIRes?.experience || [],
    userSummary: genAIRes?.userSummary || "",
    soft_skills: genAIRes?.soft_skills || [],
  });
  // return res
  return res
    .status(200)
    .json(new apiResponse(200, "user resume evaluation successful", evaluation));
});

const profileGithubEvaluate = asyncHandler(async (req, res) => {
  // get user info
  const user = await userModal.findById(req.user._id);
  // query graphql request to github
  const github = await githubInfoExtractor(user?.githubToken);
  if (!github) {
    throw new apiError(500, "failed to fetch user github info. please try again");
  }
  // send llm
  const prompt = githubEvaluationPrompt.replace("{{GITHUB_INFO}}", JSON.stringify(github));
  const ai = await parseWithAI(prompt);
  const genAIRes = JSON.parse(ai);
  // save on db
  await userModal.findByIdAndUpdate(req.user._id, { skills: genAIRes.skills || [] });
  const evaluation = await evaluationModal.findOneAndUpdate(
    { userId: req.user._id },
    {
      userId: req.user._id,
      genAIRes,
    }
  );
  // return res
  return res
    .status(200)
    .json(new apiResponse(200, "user github evaluation successful", evaluation));
});

export { profileResumeEvaluate, profileGithubEvaluate };
