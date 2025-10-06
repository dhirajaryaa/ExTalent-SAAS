import api from "./baseApi";

const logoutUserAPI = async () => {
  const res = await api.post("/auth/logout");
  if (res.status === "200") {
    return res.data;
  };
};

export {logoutUserAPI};