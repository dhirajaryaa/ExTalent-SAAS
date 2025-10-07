import api from "./baseApi";

const userResumeUploadAPI = async (data) => {
  const formData = new FormData();
  formData.append("resume", data);
  const res = await api.post("/users/profile/resume", formData, {
    headers: { "Content-Type": "multipart/form-data" }, //important for file handling
  });
  return res.data;
};

const userOnboardingAPI = async () => {
  const res = await api.patch("/users/profile/onboarding");
  return res.data;
};

export { userResumeUploadAPI, userOnboardingAPI };
