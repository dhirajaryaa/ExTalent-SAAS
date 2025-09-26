import z from "zod";

const skillsSchema = z.object({
  name: z.string().max(50),
  score: z.number().max(100),
});

const updateProfileSchema = z.object({
  name: z.string().max(80).optional,
  email: z.email().optional(),
  avatar: z.url().optional(),
  bio: z.string().max(150).optional(),
  location: z.string().optional(),
  blogLink: z.url().optional(),
  skills: z.array(skillsSchema).optional(),
});

export default updateProfileSchema;
