import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModel from "./user.model.js";

// user profile
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
    .select("-githubId -githubToken -refreshToken -isOnboarding -isDeleted -expireAt");
  //? return res
  return res.status(200).json(new apiResponse(200, "get user profile successful", loginUser));
});

// delete user after 30days
const deleteUserAccount = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new apiError(401, "unAuthorized Request!");
  }
  // expired time
  const expireAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  // set ttl for user delete
  await userModel.findByIdAndUpdate(req.user._id, {
    expireAt,
  });
  //? return res
  return res.status(200).json(new apiResponse(200, "profile deleted! after 30 days.", null));
});

export { getUserProfile, deleteUserAccount };
