import { userOnboardingAPI, userProfileAPI, userResumeEvaluationAPI, userResumeUploadAPI } from "@/api/user.api";
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

  const userResumeEvaluation = useMutation({
    mutationFn: userResumeEvaluationAPI,
    mutationKey: ["userResumeEvaluation"],
  })
  return { userResumeUpload, userOnboarding ,userProfile,userResumeEvaluation};
};

export default useUser;
