import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      required: true,
      default: "",
    },
    githubUsername: {
      type: String,
      default: "",
    },
    githubId: {
      type: String,
      default: "",
    },
    githubToken: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    blogLink: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isOnboarding: {
      type: Boolean,
      default: true,
    },
    expireAt: {
      type: Date,
      default: null,
    },
    resume: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
