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
  const res = await api.patch("/users/profile/onboarding", null, {
    params: {
      onboarding: true,
    },
  });
  return res.data;
};

const userProfileAPI = async () => {
  const res = await api.get("/users/profile");
  return res.data;
};

const userResumeEvaluationAPI = async () => {
  const res = await api.get("/evaluations/resume");
  return res.data;
};

const userProfileUpdateAPI = async(data)=>{
  const res = await api.put('/users/profile',data)
  return res.data;
}

const userSkillsUpdateAPI = async(data)=>{
  const res = await api.patch('/users/profile/skills',data)
  return res.data;
}

const userProfileDeleteAPI = async () => {
  const res = await api.delete("/users/profile");
  return res.data;
}

export {
  userResumeUploadAPI,
  userOnboardingAPI,
  userProfileAPI,
  userResumeEvaluationAPI,
  userProfileUpdateAPI,
  userSkillsUpdateAPI,
  userProfileDeleteAPI
};
