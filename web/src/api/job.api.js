import api from "./baseApi";

// get all jobs
const getJobsAPI = async (pageNo = 1, limit = 10) => {
  const res = api.get(`/jobs?page=${pageNo}&limit=${limit}`);
  return res.data;
};
// get job with id
const getJobAPI = async (id) => {
  if (!id) return null;
  const res = api.get(`/jobs/${id}`);
  return res.data;
};

export { getJobAPI, getJobsAPI };
