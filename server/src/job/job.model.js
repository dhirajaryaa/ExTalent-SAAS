import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema(
  {
    overallScore: {
      type: Number,
      default: 0,
      required: true,
    },
    relevanceScore: {
      type: Number,
      default: 0,
      required: true,
    },
    skillsScore: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { _id: false }
);

const skillsSchema = new Schema(
  {
    skill: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const jobSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
      default: null,
    },
    savedJob: {
      type: Boolean,
      default: false,
    },
    score: scoreSchema,
    scanSummary: {
      type: String,
      required: true,
    },
    matchSkills: [skillsSchema],
    missingSkills: [skillsSchema],
    recommendations: [String],
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const jobModal = mongoose.model("Job", jobSchema);
export default jobModal;
