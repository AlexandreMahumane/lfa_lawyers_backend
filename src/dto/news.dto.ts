import { z } from "zod";

const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 9 * 1024 * 1024, {
    message: "The maximum size should be 9mb",
  })
  .optional();
export const NewsInputDTO = z.object({
  file: fileSchema,
  pt: z.object({ title: z.string(), text: z.string() }),
  en: z.object({ title: z.string(), text: z.string() }),
});
export const NewsInputUpdateDTO = z.object({
  file: fileSchema,
  pt: z.object({ title: z.string().optional(), text: z.string().optional() }),
  en: z.object({ title: z.string().optional(), text: z.string().optional() }),
});

export type NewsInputDTO = z.infer<typeof NewsInputDTO>;
export type NewsInputUpdateDTO = z.infer<typeof NewsInputUpdateDTO>;
