import { Rss } from "lucide-react";
import api from "./baseApi";

const logoutUserAPI = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

const loginUserAPI = async () => {
  const res = await api.get("/auth/me");
  return res.data?.data;
};

export { logoutUserAPI, loginUserAPI };
