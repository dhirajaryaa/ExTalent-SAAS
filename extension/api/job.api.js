import { asyncHandler } from "@/utils/asyncHandler.js";
import { api } from "./base.js";

export const scanNewJob = async (data) => {
  const res = await asyncHandler(api.post("/jobs/scan", data), "scanNewJob");
  if (res.success) {
    return res.data;
  }
  return null;
};
