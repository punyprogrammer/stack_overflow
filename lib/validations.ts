import { z } from "zod";

// Schema for question
export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, "Title should have min 5 characters")
    .max(130, "Title cannot exceed 130 characters"),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1)).min(1).max(3),
});
