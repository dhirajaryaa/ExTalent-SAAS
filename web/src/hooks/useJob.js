import { deleteJobAPI, getJobAPI, getJobsAPI } from "@/api/job.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useJob = (enable, { query, jobId }) => {
  const getAllJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getJobsAPI(query?.pageNo, query?.limit),
    enabled: query && enable,
  });

  const getJobWithId = useQuery({
    queryKey: ["jobs", jobId],
    queryFn: () => getJobAPI(jobId),
    enabled: jobId && enable,
  });

  const deleteJobWithId = useMutation({
    mutationFn: () => deleteJobAPI(jobId),
    enabled: jobId && enable,
  });

  return { getAllJobs, getJobWithId ,deleteJobWithId};
};
