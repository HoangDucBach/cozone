// File: ServerManager.ts
import { Room } from "../classes/Room";
import { User } from "../classes/User";
import {MessageBuilder} from "../classes/Message";

class ServerManager {
    private static instance: ServerManager;
    private users: Map<string, User> = new Map();
    private messageHistory: Array<MessageBuilder> = new Array<MessageBuilder>();
    private constructor() {}

    public static getInstance(): ServerManager {
        if (!ServerManager.instance) {
            ServerManager.instance = new ServerManager();
        }
        return ServerManager.instance;
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

    public getMessageHistory(): Array<MessageBuilder> {
        return this.messageHistory;
    }

}

export default ServerManager;
