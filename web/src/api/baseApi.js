import axios from "axios";

const token = localStorage.getItem("token") || "";
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export default api;
