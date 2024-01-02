import { User } from "./User";

class Message {
    private user: User;
    private time: Date;
    private message: string;
    private reply: Message;

    constructor(builder: MessageBuilder) {
        this.user = builder.getUser();
        this.time = builder.getTime();
        this.message = builder.getMessage();
        this.reply = builder.getReply();
    }
}

export class MessageBuilder {
    private user: User;
    private time: Date;
    private message: string;
    private reply: Message;

    constructor() {
    }

    /**
     * Setter and getter.
     */
    public setUser(user: User) {
        this.user=user;
        return this;
    }
    public setTime(time: Date): MessageBuilder {
        this.time = time;
        return this;
    }

    public setMessage(message: string): MessageBuilder {
        this.message = message;
        return this;
    }

    public setReply(reply: Message): MessageBuilder {
        this.reply = reply;
        return this;
    }

    public getUser(): User {
        return this.user;
    }

    public getTime(): Date {
        return this.time || new Date();
    }

    public getMessage(): string {
        return this.message || "";
    }

    public getReply(): Message {
        return this.reply;
    }

    /**
     * Method
     */
    public build(): Message {
        return new Message(this);
    }
}