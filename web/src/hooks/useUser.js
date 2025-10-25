import {
  userOnboardingAPI,
  userProfileAPI,
  userProfileDeleteAPI,
  userProfileUpdateAPI,
  userResumeEvaluationAPI,
  userResumeUploadAPI,
  userSkillsUpdateAPI,
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

  const userSkillsUpdate = useMutation({
    mutationFn: userSkillsUpdateAPI,
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
  const userProfileDelete = useMutation({
    mutationFn: userProfileDeleteAPI
  });
  return {
    userResumeUpload,
    userOnboarding,
    userProfile,
    userResumeEvaluation,
    userProfileUpdate,
    userSkillsUpdate,
    userProfileDelete
  };
};

export default useUser;
