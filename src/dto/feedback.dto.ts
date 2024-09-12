import { z } from "zod";

const FeedbackInputDTO = z.object({
  name: z.string(),
  content: z.string(),
});

export type FeedbackDTO = z.infer<typeof FeedbackInputDTO>;
