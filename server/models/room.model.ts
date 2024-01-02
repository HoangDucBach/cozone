// File: RoomManager.ts
import { Room } from "../classes/Room";
import { User } from "../classes/User";

class RoomManager {
    private static instance: RoomManager;
    private rooms: Map<string, Room> = new Map();
    private users: Map<string, User> = new Map();

    private constructor() {}

    public static getInstance(): RoomManager {
        if (!RoomManager.instance) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    }

    public addRoom(room:Room): Room {
        this.rooms.set(room.getName(), room);
        return room;
    }

    public getRoom(name: string): Room | undefined {
        return this.rooms.get(name);
    }

    public addUser(user: User): void {
        this.users.set(user.getSocketId(), user);
    }

    public removeUser(socketId: string): void {
        this.users.delete(socketId);
    }

    public getUser(socketId: string): User | undefined {
        return this.users.get(socketId);
    }

    public getRooms(): IterableIterator<[string, Room]> {
        return this.rooms.entries();
    }
}

export default RoomManager;
