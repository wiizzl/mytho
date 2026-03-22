import { WsInputSchema } from "@mytho/shared";
import { Elysia } from "elysia";

import { roomManager } from "../managers/room.manager";

export const gameHandler = new Elysia().ws("/game/:roomId", {
  body: WsInputSchema,

  open(ws) {
    const { roomId } = ws.data.params;
    const room = roomManager.getOrCreate(roomId);
    ws.subscribe(roomId);
    ws.send({ type: "STATE_UPDATE", state: room.getState() });
  },

  message(ws, message) {
    const { roomId } = ws.data.params;
    const room = roomManager.getOrCreate(roomId);
    const socketId = getSocketId(ws);

    try {
      room.handleMessage(socketId, message);
      ws.publish(roomId, { type: "STATE_UPDATE", state: room.getState() });
    } catch (error) {
      ws.send({
        type: "ERROR",
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  },

  close(ws) {
    const { roomId } = ws.data.params;
    const room = roomManager.get(roomId);
    if (!room) {
      return;
    }

    room.disconnect(getSocketId(ws));

    if (room.game.players.length === 0) {
      roomManager.removeRoom(roomId);
      return;
    }

    ws.publish(roomId, { type: "STATE_UPDATE", state: room.getState() });
  },
});

function getSocketId(ws: any): string {
  const queryClientId = ws.data.query?.clientId;
  if (typeof queryClientId === "string" && queryClientId.trim()) {
    return queryClientId;
  }

  const wsKey = ws.data.headers?.["sec-websocket-key"];
  if (typeof wsKey === "string" && wsKey.trim()) {
    return wsKey;
  }

  return `${ws.data.params.roomId}-${Date.now()}`;
}
