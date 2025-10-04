import z from "zod";
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";

const scanNewJob = asyncHandler(async (req, res) => {
  return res.status(201).json(new apiResponse(201, "job scanned successfully", null));
});


export { scanNewJob };