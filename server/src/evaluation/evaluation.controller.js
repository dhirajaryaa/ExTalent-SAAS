import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModal from "../user/user.model.js";
import evaluationModal from "./evaluation.model.js";
import { extractTextFromPDF } from "../services/resume.service.js";
import { parseWithAI } from "../services/openAI.service.js";
import resumeEvaluationPrompt from "../prompt/resume.prompt.js";

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
    pdfRowText: JSON.stringify(rowText),
    genAIRes,
  });
  // return res
  return res
    .status(200)
    .json(new apiResponse(200, "user resume evaluation successful", evaluation));
});

export { profileResumeEvaluate };
