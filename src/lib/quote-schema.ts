import { z } from "zod";

const field = z.string().trim().min(1).max(2000);

export const quoteSchema = z.object({
  what: field,
  who: field,
  budget: field,
  when: field,
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
});

export type QuotePayload = z.infer<typeof quoteSchema>;
