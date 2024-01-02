import {Room} from "./Room";

enum BotEyeType {
    NORMAL,
    ANGRY,
    SAD,
    HAPPY
}

enum BotMouthType {
    SMILE,
    SAD
}

class Avatar {
    private backgroundColor: string;
    private botColor: string;
    private eye: BotEyeType;
    private mouth: BotMouthType;

    constructor(backgroundColor: string, botColor: string, eye: BotEyeType, mouth: BotMouthType) {
        this.backgroundColor = backgroundColor;
        this.botColor = botColor;
        this.eye = eye;
        this.mouth = mouth;

    }
}

export class User {
    private name: string;
    private socketId: String;
    private avatar: Avatar | null;
    private rooms: Array<Room> = [];

    constructor(name: string, socketId: string, avatar: Avatar | null) {

        this.name = name || "Anonymous";
        // @ts-ignore
        this.socketId = String(socketId) || null;
        this.avatar = avatar || null;
    }

    /**
     * Setter and getter.
     */
    public getName(): string {
        return this.name;
    }

    public getSocketId(): string {
        return <string>this.socketId;
    }

    public getAvatar(): Avatar |null {
        return this.avatar;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setSocketId(socketId: string) {
        this.socketId = socketId;
    }

    public setAvatar(avatar: Avatar) {
        this.avatar = avatar;
    }

    /**
     * Method.
     */
    public sendMessage(): void {

    }

    public joinRoom(room: Room) {
        this.rooms.push(room);
    }

    public leaveRoom(room: Room) {
        this.rooms = this.rooms.filter((r) => r !== room);
    }
}