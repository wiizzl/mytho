import { GAME_RULES } from "@mytho/shared";

import { Player } from "./player";

export type GameState = "LOBBY" | "PLAYING" | "ENDED";

export class Game {
  public players: Player[] = [];
  public status: GameState = "LOBBY";

  addPlayer(player: Player) {
    if (this.status !== "LOBBY") {
      throw new Error("Cannot join a started game");
    }

    this.players.push(player);
  }

  removePlayer(playerId: Player["id"]) {
    this.players = this.players.filter((player) => player.id !== playerId);

    if (this.players.length === 0) {
      this.reset();
    }
  }

  start() {
    if (this.players.length < GAME_RULES.MIN_PLAYERS) {
      throw new Error(`At least ${GAME_RULES.MIN_PLAYERS} players are required`);
    }

    this.status = "PLAYING";
  }

  getPublicState() {
    return {
      status: this.status,
      players: this.players.map((player) => player.toPublicState()),
    };
  }

  private reset() {
    this.status = "LOBBY";
  }
}
