import { z } from "zod";

const FileDTO = z
  .instanceof(File)
  .refine((file) => file.size <= 9 * 1024 * 1024, {
    message: "The maximum size should be 9mb",
  })
  .optional();
const MemberInputDTO = z.object({
  name: z.string().min(2),
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
export type FileDTO = z.infer<typeof FileDTO>;
