import { getJobsAPI } from "@/api/job.api";
import { useQuery } from "@tanstack/react-query";

export const useJob = (
  prams = { pageNo: 1, limit: 10, jobId: "" },
  enable = "false"
) => {
  const getAllJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: ()=>getJobsAPI(prams?.pageNo,prams?.limit),
    enabled: enable,
  });

  const getJobWithId = useQuery({
    queryKey: ["jobs", prams?.jobId],
    queryFn: () => getJobsAPI(prams?.jobId),
    enabled: enable,
  });

  return { getAllJobs, getJobWithId };
};
