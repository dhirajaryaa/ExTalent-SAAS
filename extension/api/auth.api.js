import { asyncHandler } from "@/entrypoints/utils/asyncHandler.js";
import { api } from "./base.js";

const fetchAuthUser = async () => {  
  const res = await asyncHandler(api.get("/auth/me"), "fetchAuthUser");
  if (res.success) {
    return res.data.data;
  }
  return null;
};

const logoutAuthUser = async () => {
  const res = await asyncHandler(api.post("/auth/logout"), "logoutAuthUser");
  if (res.success) {
    return res.data.data;
  }
  return null;
};

export { fetchAuthUser, logoutAuthUser };
