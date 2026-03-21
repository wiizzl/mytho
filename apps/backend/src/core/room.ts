import { GAME_RULES, type WSInput } from "@mytho/shared";

import { Game } from "./game";
import { Player } from "./player";

export class Room {
  public readonly id: string;
  public readonly game: Game;
  private hostId?: string;

  constructor(id: string) {
    this.id = id;
    this.game = new Game();
  }

  handleMessage(socketId: string, message: WSInput) {
    switch (message.type) {
      case "JOIN":
        this.join(socketId, message.name);
        return;
      case "START_GAME":
        this.startGame(socketId);
        return;
      default:
        this.assertNever(message);
    }
  }

  disconnect(socketId: string) {
    const wasHost = this.hostId === socketId;
    this.game.removePlayer(socketId);

    if (this.game.players.length === 0) {
      this.hostId = undefined;
      return;
    }

    if (wasHost) {
      this.hostId = this.game.players[0]?.id;
    }
  }

  getState() {
    return {
      roomId: this.id,
      hostId: this.hostId,
      canStart: this.game.status === "LOBBY" && this.game.players.length >= GAME_RULES.MIN_PLAYERS,
      ...this.game.getPublicState(),
    };
  }

  private join(socketId: string, name: string) {
    if (this.game.status !== "LOBBY") {
      throw new Error("Cannot join a started game");
    }

    if (this.game.players.length >= GAME_RULES.MAX_PLAYERS) {
      throw new Error(`Room is full (${GAME_RULES.MAX_PLAYERS} players max)`);
    }

    const normalizedName = name.trim().replace(/\s+/g, " ");

    if (normalizedName.length < 2) {
      throw new Error("Name too short");
    }

    const duplicateName = this.game.players.some(
      (player) => player.id !== socketId && player.name.toLowerCase() === normalizedName.toLowerCase(),
    );
    if (duplicateName) {
      throw new Error("Name already taken");
    }

    const exists = this.game.players.some((player) => player.id === socketId);
    if (exists) {
      return;
    }

    this.game.addPlayer(new Player(socketId, normalizedName));

    if (!this.hostId) {
      this.hostId = socketId;
    }
  }

  private startGame(socketId: string) {
    const isPlayerInRoom = this.game.players.some((player) => player.id === socketId);
    if (!isPlayerInRoom) {
      throw new Error("Join the room before starting the game");
    }

    if (this.hostId && socketId !== this.hostId) {
      throw new Error("Only host can start the game");
    }

    this.game.start();
  }

  private assertNever(value: never): never {
    throw new Error(`Unsupported message: ${JSON.stringify(value)}`);
  }
}
