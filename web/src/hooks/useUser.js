import { userOnboardingAPI, userProfileAPI, userResumeUploadAPI } from "@/api/user.api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useUser = (enable) => {
  const userResumeUpload = useMutation({
    mutationFn: userResumeUploadAPI,
    mutationKey: ["userResumeUpload"],
  });

  const userOnboarding = useMutation({
    mutationFn: userOnboardingAPI,
    mutationKey: ["userOnboarding"],
  });

  const userProfile = useQuery({
    queryKey: ["userProfile"],
    queryFn: userProfileAPI,
    enabled: enable
  })
  return { userResumeUpload, userOnboarding ,userProfile};
};

export default useUser;
