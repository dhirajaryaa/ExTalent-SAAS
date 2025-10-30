import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
      max: 100,
    },
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: '',
    },
    responsibilities: [String],
  },
  { _id: false }
);

const evaluationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    skills: [skillsSchema],
    experience: [experienceSchema],
    userSummary: {
      type: String,
      default: "",
    },
    soft_skills: [skillsSchema],
    pdfRowText: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const evaluationModal = mongoose.model("Evaluation", evaluationSchema);
export default evaluationModal;
