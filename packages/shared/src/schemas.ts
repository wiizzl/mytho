import { z } from "zod";

export const WsInputSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("JOIN"), name: z.string().min(2) }),
  z.object({ type: z.literal("START_GAME") }),
]);

export const GameStateSchema = z.object({
  roomId: z.string(),
  hostId: z.string().optional(),
  canStart: z.boolean(),
  status: z.enum(["LOBBY", "PLAYING", "ENDED"]),
  players: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      cardCount: z.number(),
    }),
  ),
});
