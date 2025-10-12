import { getJobsAPI } from "@/api/job.api";
import { useQuery } from "@tanstack/react-query";

export const useJob = (jobId, enable = "false") => {
  const getAllJobs = useQuery({
    queryKey: [jobs],
    queryFn: getJobsAPI,
    enabled: enable
  });

  const getJobWithId = useQuery({
    queryKey: [jobs, jobId],
    queryFn: () => getJobsAPI(jobId),
      enabled: enable
  });

  return { getAllJobs, getJobWithId };
};
