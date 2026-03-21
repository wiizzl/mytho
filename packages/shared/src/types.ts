import { z } from "zod";

import type { GameStateSchema, WsInputSchema } from "./schemas";

export type GameStateView = z.infer<typeof GameStateSchema>;
export type WSInput = z.infer<typeof WsInputSchema>;
