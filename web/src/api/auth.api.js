import api from "./baseApi";

const logoutUserAPI = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

export { logoutUserAPI };
