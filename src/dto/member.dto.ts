import { z } from "zod";

const MemberInputDTO = z.object({
  name: z.string(),
  position: z.string(),
  description: z.string(),
});
const MemberInputUpdateDTO = z.object({
  name: z.string().optional(),
  position: z.string().optional(),
  description: z.string().optional(),
});

export type MemberInputDTO = z.infer<typeof MemberInputDTO>;
export type MemberInputUpdateDTO = z.infer<typeof MemberInputUpdateDTO>;
