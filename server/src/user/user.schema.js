import z from "zod";


const skillsSchema = z.object({
  name: z.string().min(1).max(50),
  score: z.number().int().min(0).max(100),
});

export const userSkillsSchema = z.object({
  skills: z.array(skillsSchema).optional()
});

const updateProfileSchema = z.object({
  name: z.string().min(1).max(80).optional(),
  email: z.string().email().optional(),
  avatar: z.string().url().optional(),
  bio: z.string().min(1).max(150).optional(),
  location: z.string().min(1).optional(),
  blogLink: z.string().url().optional(),
  skills: z.array(skillsSchema).optional(),
}).refine((data) => Object.keys(data).length > 0, { message: "No updatable data found!" });

export default updateProfileSchema;
