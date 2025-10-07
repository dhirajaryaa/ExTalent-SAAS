import { userOnboardingAPI, userResumeUploadAPI } from "@/api/user.api";
import { useMutation } from "@tanstack/react-query";

const useUser = (enable) => {
  const userResumeUpload = useMutation({
    mutationFn: userResumeUploadAPI,
    mutationKey: ["userResumeUpload"],
  });

  const userOnboarding = useMutation({
    mutationFn: userOnboardingAPI,
    mutationKey: ["userOnboarding"],
  });
  return { userResumeUpload, userOnboarding };
};

export default useUser;
