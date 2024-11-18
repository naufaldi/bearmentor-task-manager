import { z } from "zod";

export const LoginSchema = z.object({
  id: z.string().min(5, { message: "Kurang panjang bos" }),
  username: z.string().min(5).max(10),
  password: z.string().min(8).max(20)
})