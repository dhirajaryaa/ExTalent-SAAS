import z from "zod";

export const jobScanSchema = z.object({
    jobDescription: z.string().min(5),
    url: z.string().url(),
    logo: z.string().optional(),
    companyName : z.string()
});