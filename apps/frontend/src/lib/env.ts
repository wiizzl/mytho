import { SharedEnvSchema } from "@mytho/shared";
import { z } from "zod";

const EnvSchema = SharedEnvSchema.extend({
  VITE_API_URL: z.string().url().default("http://localhost:3000"),
  VITE_WS_URL: z.string().url().default("ws://localhost:3000"),
});

export const env = EnvSchema.parse(import.meta.env);
