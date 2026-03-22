import { SharedEnvSchema } from "@mytho/shared";
import { z } from "zod";

const EnvSchema = SharedEnvSchema.extend({
  PORT: z.coerce.number().int().positive().default(3000),
});

export const env = EnvSchema.parse(Bun.env);
