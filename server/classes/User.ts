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
    private backgroundColor: String;
    private botColor: String;
    private eye: BotEyeType;
    private mouth: BotMouthType;
    constructor(backgroundColor: String, botColor: String, eye: BotEyeType, mouth: BotMouthType) {
        this.backgroundColor = backgroundColor;
        this.botColor = botColor;
        this.eye = eye;
        this.mouth = mouth;

    }
}

export class User {
    private name: String;
    private socketId: String;
    private avatar: Avatar;

    constructor(name: String, socketId: String, avatar: Avatar) {
        this.name = name || "Anonymous";
        this.socketId = socketId || null;
        this.avatar = avatar || null;
    }

    /**
     * Setter and getter.
     */
    public getName(): String {
        return this.name;
    }

    public getSocketId(): String {
        return this.socketId;
    }

    public getAvatar(): Avatar {
        return this.avatar;
    }

    public setName(name: String) {
        this.name = name;
    }

    public setSocketId(socketId:String) {
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
}