import { asyncHandler } from "@/utils/asyncHandler.js";
import { api } from "./base.js";

export const scanNewJob = async (data) => {
  const res = await asyncHandler(api.post("/jobs/scan", data), "scanNewJob"); 
 return res.success ? res.data?.data : res.error
};
