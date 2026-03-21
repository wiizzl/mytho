import { Room } from "../core/room";

export class RoomManager {
  private rooms = new Map<string, Room>();

  getOrCreate(roomId: string): Room {
    if (!this.rooms.has(roomId)) {
      this.rooms.set(roomId, new Room(roomId));
    }

    return this.rooms.get(roomId)!;
  }

  get(roomId: string) {
    return this.rooms.get(roomId);
  }

  removeRoom(roomId: string) {
    this.rooms.delete(roomId);
  }
}

export const roomManager = new RoomManager();
