import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModel from "../user/user.model.js";
import generateAccessAndRefreshToken from "../lib/generateToken.js";
import { client_url, cookiesOptions } from "../config/env.js";

const githubOauthLogin = asyncHandler(async (req, res) => {
  const { _json: profile } = req.user;
  const { accessToken: githubToken } = req.authInfo;
  if (!profile) {
    throw new apiError(404, "user profile not found!", "VALIDATION");
  }
  // find user
  let user = await userModel.findOne({ githubId: profile?.node_id });
  if (!user) {
    // create new user
    user = await userModel.create({
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar_url,
      githubUsername: profile.login,
      githubId: profile.node_id,
      bio: profile.bio,
      location: profile.location,
      blogLink: profile.blog,
      githubToken,
    });
  }

  //   token generate
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);
  if (!(accessToken && refreshToken)) {
    throw new apiError(500, "Something went wrong!");
  }
  // save token in db
  await userModel.findByIdAndUpdate(user._id, {
    refreshToken,
  });
  //   set cookies
  res.cookie("accessToken", accessToken, cookiesOptions);
  res.cookie("refreshToken", refreshToken, cookiesOptions);
  //? return redirect
  return res.status(200).redirect(`${client_url}/dashboard`);
});

// logout
const userLogout = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new apiError(401, "unAuthorized Request!");
  }
  // remove refresh token from db
  await userModel.findByIdAndUpdate(req.user?._id, {
    refreshToken: "",
  });
  //   clear cookies
  res.clearCookie("accessToken", "", cookiesOptions);
  res.clearCookie("refreshToken", "", cookiesOptions);
  //? return res
  return res.status(200).json(new apiResponse(200, "user logout successful"));
});

// current login user
const currentLoginUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new apiError(401, "unAuthorized Request!");
  }
  // get user info with remove sensitive info
  const loginUser = await userModel.findById(req.user?._id).select("-githubId -githubToken -refreshToken -isDeleted");
  if (!loginUser) {
    throw new apiError(404, "user not found!");
  }
  //? return res
  return res.status(200).json(new apiResponse(200, "login user profile successful", loginUser));
});

export { githubOauthLogin, userLogout, currentLoginUser };
