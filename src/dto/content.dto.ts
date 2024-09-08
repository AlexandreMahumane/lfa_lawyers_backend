import { z } from "zod";

const ContentInputDTO = z.object({
  pt: z.object({
    presentation: z.string(),
    aboutUs: z.string(),
    values: z.string(),
    team: z.string(),
    skills: z.string(),
    joinUs: z.string(),
  }),
  en: z.object({
    presentation: z.string(),
    aboutUs: z.string(),
    values: z.string(),
    team: z.string(),
    skills: z.string(),
    joinUs: z.string(),
  }),
});

const ContentInputUpdateDTO = z.object({
  pt: z.object({
    presentation: z.string().optional(),
    aboutUs: z.string().optional(),
    values: z.string().optional(),
    team: z.string().optional(),
    skills: z.string().optional(),
    joinUs: z.string().optional(),
  }),
  en: z.object({
    presentation: z.string().optional(),
    aboutUs: z.string().optional(),
    values: z.string().optional(),
    team: z.string().optional(),
    skills: z.string().optional(),
    joinUs: z.string().optional(),
  }),
});

export type ContentInputDTO = z.infer<typeof ContentInputDTO>;
export type ContentInputUpdateDTO = z.infer<typeof ContentInputUpdateDTO>;
