import api from "./baseApi";

const userResumeUploadAPI = async (data) => {
    const res = await api.post("/user/profile/resume", data);
    return res.data;
};

const userOnboardingAPI = async () => {
  const res = await api.patch("/users/profile/onboarding");
  return res.data;
};

export {userResumeUploadAPI,userOnboardingAPI}