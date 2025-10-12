import { getJobsAPI } from "@/api/job.api";
import { useQuery } from "@tanstack/react-query";

export const useJob = (
  query = { pageNo: 1, limit: 10},
  enable = false,
  jobId,
) => {
  const getAllJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: ()=>getJobsAPI(query?.pageNo,query?.limit),
    enabled:  enable,
  });

  const getJobWithId = useQuery({
    queryKey: ["jobs", jobId],
    queryFn: () => getJobWithId(jobId),
    enabled: jobId && enable,
  });

  return { getAllJobs, getJobWithId };
};
