import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    pdfRowText: {
      type: String,
      default: "",
    },
    genAIRes : {},
    githubInfo: {}
  },
  { timestamps: true }
);

const evaluationModal = mongoose.model("Evaluation",evaluationSchema);
export default evaluationModal;