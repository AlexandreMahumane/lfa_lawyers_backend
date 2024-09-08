import { z } from "zod";

export const ContactInputDTO = z.object({
  adress: z.string(),
  tel: z.string(),
  email: z.string(),
});
export const ContactInputUpdateDTO = z.object({
  adress: z.string().optional(),
  tel: z.string().optional(),
  email: z.string().optional(),
});

export type ContactInputDTO = z.infer<typeof ContactInputDTO>;
export type ContactInputUpdateDTO = z.infer<typeof ContactInputUpdateDTO>;
