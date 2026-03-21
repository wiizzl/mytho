import { z } from "zod";

const EnvSchema = z.object({
  VITE_API_URL: z.url().default("http://localhost:3000"),
  VITE_WS_URL: z.url().default("ws://localhost:3000"),

  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = EnvSchema.parse(import.meta.env);
