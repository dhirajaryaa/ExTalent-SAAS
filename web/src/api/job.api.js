import api from "./baseApi";

// create new job scan
const newJobScanAPI = async (data) => {
  const res = await api.post("/jobs/scan", data);
  return res.data;
};

// get all jobs
const getJobsAPI = async (pageNo = 1, limit = 10) => {
  const res = await api.get(`/jobs?page=${pageNo}&limit=${limit}`);
  return res.data;
};
// get job with id
const getJobAPI = async (id) => {
  if (!id) return null;
  const res = await api.get(`/jobs/${id}`);
  return res.data;
};
//delete job with id
const deleteJobAPI = async (id) => {
  if (!id) return null;
  const res = await api.delete(`/jobs/${id}`);
  return res.data;
};

export { getJobAPI, getJobsAPI, deleteJobAPI ,newJobScanAPI};
