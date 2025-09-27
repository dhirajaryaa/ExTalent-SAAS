import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModal from "../user/user.model.js";
import evaluationModal from "./evaluation.model.js";
import { extractTextFromPDF } from "../services/resume.service.js";

const profileResumeEvaluate = asyncHandler(async (req, res) => {
  //get resume
  const user = await userModal.findById(req.user._id);
  // send to pdf parser services
  const rowText = await extractTextFromPDF(user.resume?.url);
  if(!rowText){
   throw new apiError(400,"failed to parse resume! try again")
  };
  // send to llm
  // save on db
  const evaluation = await evaluationModal.create({
    userId: req.user._id,
    pdfRowText: JSON.stringify(rowText),
  });
  // return res
  return res
    .status(200)
    .json(new apiResponse(200, "user resume evaluation successful", evaluation));
});

export { profileResumeEvaluate };
