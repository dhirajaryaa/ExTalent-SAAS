import z from "zod";

const updateProfileSchema = z.object({
  name: z.string().min(1).max(80).optional(),
  email: z.string().email().optional(),
  avatar: z.string().url().optional(),
  bio: z.string().min(1).max(150).optional(),
  location: z.string().min(1).optional(),
  blogLink: z.string().url().optional()
}).refine((data) => Object.keys(data).length > 0, { message: "No updatable data found!" });

export default updateProfileSchema;