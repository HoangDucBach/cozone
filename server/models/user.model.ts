// File: UserManager.ts
import { User } from "../classes/User";

class UserManager {
    private static instance: UserManager;
    private users: Map<string, User> = new Map();

    private constructor() {}

    public static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
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
}

export default UserManager;
