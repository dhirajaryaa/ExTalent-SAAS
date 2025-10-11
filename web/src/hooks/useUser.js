import {
  userOnboardingAPI,
  userProfileAPI,
  userProfileUpdateAPI,
  userResumeEvaluationAPI,
  userResumeUploadAPI,
} from "@/api/user.api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useUser = (enable = true) => {
  const userResumeUpload = useMutation({
    mutationFn: userResumeUploadAPI,
    mutationKey: ["userResumeUpload"],
  });

  const userProfileUpdate = useMutation({
    mutationFn: userProfileUpdateAPI,
  });

  const userOnboarding = useMutation({
    mutationFn: userOnboardingAPI,
    mutationKey: ["userOnboarding"],
  });

  const userProfile = useQuery({
    queryKey: ["userProfile"],
    queryFn: userProfileAPI,
    enabled: enable,
  });

  const userResumeEvaluation = useMutation({
    mutationFn: userResumeEvaluationAPI,
    mutationKey: ["userResumeEvaluation"],
  });
  return {
    userResumeUpload,
    userOnboarding,
    userProfile,
    userResumeEvaluation,
    userProfileUpdate,
  };
};

export default useUser;
