import { z } from "zod";

const MemberInputDTO = z.object({
  name: z.string(),
  pt: z.object({
    position: z.string(),
    description: z.string(),
  }),
  en: z.object({
    position: z.string(),
    description: z.string(),
  }),
});
const MemberInputUpdateDTO = z.object({
  name: z.string().optional(),
  pt: z.object({
    position: z.string().optional(),
    description: z.string().optional(),
  }),
  en: z.object({
    position: z.string().optional(),
    description: z.string().optional(),
  }),
});

export type MemberInputDTO = z.infer<typeof MemberInputDTO>;
export type MemberInputUpdateDTO = z.infer<typeof MemberInputUpdateDTO>;
