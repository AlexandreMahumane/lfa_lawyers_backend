import { z } from "zod";

const UserInputDTO = z.object({
  name: z.string().min(2),
  password: z.string().min(3),
});
const UserInputUpdateDTO = z.object({
  name: z.string().min(2).optional(),
  password: z.string().min(3).optional(),
});

export type UserInputUpdateDTO = z.infer<typeof UserInputUpdateDTO>;
export type UserInputDTO = z.infer<typeof UserInputDTO>;

export interface UserOutputDTO {
  id: string;
  username: string;
}
