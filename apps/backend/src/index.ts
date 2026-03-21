import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { z } from "zod";

import { gameHandler } from "./handlers/game.handler";
import { env } from "./lib/env";

const app = new Elysia()
  .use(cors())
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
    }),
  )
  .get("/ping", () => ({ message: "pong" }))
  .use(gameHandler)
  .listen(env.PORT);

export type App = typeof app;

console.log(`Elysia is ready : http://${app.server?.hostname}:${app.server?.port}`);
