import z from "zod";

const jobScanSchema = z.object({
  jobId: z.string().min(5).max(50),
  jobDescription: z.string().min(5),
  url: z.string().url(),
});

export { jobScanSchema };
