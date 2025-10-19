import axios from "axios";
import { storage } from "#imports";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API || "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept req and attach token
api.interceptors.request.use(async (config) => {
  const token = await storage.getItem("sync:token");
  if (token) {
    console.info("✅sync Token is: ", token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
