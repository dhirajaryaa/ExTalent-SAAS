import z from "zod";
import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import userModel from "./user.model.js";
import evolutionModal from "../evaluation/evaluation.model.js";
import { resumeFileSchema, updateProfileSchema, userSkillsSchema } from "./user.schema.js";
import { removeFromCloudinary, uploadOnCloudinary } from "../services/cloudinary.service.js";

// user profile
const getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new apiError(401, "unAuthorized Request!");
  }

  // get user info with remove sensitive info
  const [user] = await userModel.aggregate([
  {
    $match: {
      _id: new mongoose.Types.ObjectId(req.user._id),
      isDeleted: false,
    },
  },
  {
    $lookup: {
      from: "evaluations",
      localField: "_id",
      foreignField: "userId",
      as: "evaluation",
    },
  },
  {
    $unwind: {
      path: "$evaluation",
      preserveNullAndEmptyArrays: true, // ✅ keep user even if no evaluation
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      email: 1,
      blogLink: 1,
      githubUsername: 1,
      avatar: 1,
      bio: 1,
      location: 1,
      resume: 1,
      summary: { $ifNull: ["$evaluation.userSummary", ""] },
      skills: { $ifNull: ["$evaluation.skills", []] },
      experience: { $ifNull: ["$evaluation.experience", []] },
      soft_skills: { $ifNull: ["$evaluation.soft_skills", []] },
    },
  },
]);
 if(user?.isDeleted){
   throw new apiError(404, "user not found!");
 }

  if (!user) {
    throw new apiError(404, "user not found!");
  }
  //? return res
  return res.status(200).json(new apiResponse(200, "get user profile successful", user));
});

// user profile edit
const userProfileUpdate = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new apiError(400, "no updatable data found!");
  }
  // validate user input
  const validate = updateProfileSchema.safeParse(req.body);
  if (!validate.success) {
    const message = z.prettifyError(validate.error);
    throw new apiError(400, message, "VALIDATION");
  }
  // update on db
  const user = await userModel.findByIdAndUpdate(req.user?._id, validate?.data, {
    new: true,
    select: "-githubId -githubToken -refreshToken -isOnboarding -isDeleted -expireAt",
  });
  //? return res
  return res.status(200).json(new apiResponse(200, "profile update successful", user));
});

// user skills update
const userSkillsUpdate = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new apiError(400, "no skills data found!");
  }
  // validate body
  const validate = userSkillsSchema.safeParse(req.body);
  if (!validate.success) {
    const message = z.prettifyError(validate.error);
    throw new apiError(400, message, "VALIDATION");
  }
  // update on db
  const user = await evolutionModal.findOneAndUpdate(
    { userId: req.user?._id },
    {
      $set: validate?.data,
    },
    {
      new: true,
      select: "+userId  +skills +experience +soft_skills",
    }
  );
  //? return res
  return res.status(200).json(new apiResponse(200, "user skills update successful", user));
});

// user onboarding change
const userOnboardingUpdate = asyncHandler(async (req, res) => {
  const { onboarding } = req.query;
  if (!onboarding) {
    throw new apiError(400, "onboarding query parameter is required", "VALIDATION");
  }
  // update user
  await userModel.findByIdAndUpdate(req.user?._id, {
    isOnboarding: false,
  });
  //? return res
  return res.status(200).json(new apiResponse(200, "user onboarding completed"));
});

//? user resume upload on cloudinary
const uploadUserResume = asyncHandler(async (req, res) => {
  // validate file
  const validate = resumeFileSchema.safeParse(req?.file);
  if (!validate.success) {
    const message = z.prettifyError(validate.error);
    throw new apiError(400, message, "VALIDATION");
  }
  // get user info
  const user = await userModel.findById(req.user?._id);
  // check prev file if have delete
  if (user.resume.publicId) {
    await removeFromCloudinary(user.resume.publicId);
  }
  // upload on cloudinary
  const upload = await uploadOnCloudinary(req.file.path);
  if (!upload) {
    throw new apiError(500, "something went wrong!");
  }
  // update user resume info
  const resumeInfo = await userModel.findByIdAndUpdate(
    user._id,
    {
      resume: {
        url: upload.secure_url || "",
        publicId: upload.public_id || null,
      },
    },
    { new: true, select: "+name +_id +resume" }
  );

  // return res
  return res.status(200).json(new apiResponse(200, "resume update successful", resumeInfo));
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
    isDeleted: true
  });
  //? return res
  return res.status(200).json(new apiResponse(200, "profile deleted! after 30 days.", null));
});
export {
  getUserProfile,
  deleteUserAccount,
  userProfileUpdate,
  userSkillsUpdate,
  userOnboardingUpdate,
  uploadUserResume,
};
