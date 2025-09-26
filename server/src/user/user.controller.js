import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModel from "./user.model.js";

const getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new apiError(401, "unAuthorized Request!");
  }

  // get user info with remove sensitive info
  const user = await userModel.findById(req.user?._id);
  if (!user) {
    throw new apiError(404, "user not found!");
  }
  // check user profile delete or not
  if (user.isDeleted) {
    throw new apiError(404, "user not found!");
  }
  // check user profile access auth user
  if (user._id.toString() !== req.user._id.toString()) {
    throw new apiError(403, "unAuthorized Request!");
  }
  const loginUser = await userModel
    .findById(user?._id)
    .select("-githubId -githubToken -refreshToken -isOnboarding -isDeleted");
  //? return res
  return res.status(200).json(new apiResponse(200, "get user profile successful", loginUser));
});

export { getUserProfile };
