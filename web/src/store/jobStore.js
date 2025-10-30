export const createJobSlice = (set) => ({
  jobs: [],
  totalJobs: 0,
  totalSavedJobs: 0,
  setJobs: (jobs) =>
    set({
      jobs: jobs.jobs,
      totalJobs: jobs.totalJobs,
      savedJobs: jobs.totalSavedJobs,
    }),
});
