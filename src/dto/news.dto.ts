import { z } from "zod";

export const NewsInputDTO = z.object({
  title: z.string(),
  text: z.string(),
});
export const NewsInputUpdateDTO = z.object({
  title: z.string().optional(),
  text: z.string().optional(),
});

export type NewsInputDTO = z.infer<typeof NewsInputDTO>;
export type NewsInputUpdateDTO = z.infer<typeof NewsInputUpdateDTO>;
