import z from "zod";

export const jobScanSchema = z.object({
    jobDescription: z.string().min(5,{ message: "Job Description Required" }).trim(),
    url: z.string().url({ message: "Invalid URL" }),
    logo: z.string().optional(),
    companyName : z.string().min(2, { message: "Company name Required" })
});