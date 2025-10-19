import axios from "axios";
import { getLocalStorage } from "@/utils/extStorage";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept req and attach token
api.interceptors.request.use(async (config) => {
  const token = await getLocalStorage("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});
