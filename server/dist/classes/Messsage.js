"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(builder) {
        this.user = builder.getUser();
        this.time = builder.getTime();
        this.message = builder.getMessage();
        this.reply = builder.getReply();
    }
}
class MessageBuilder {
    constructor(user) {
        this.user = user;
    }
    /**
     * Setter and getter.
     */
    setTime(time) {
        this.time = time;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setReply(reply) {
        this.reply = reply;
        return this;
    }
    getUser() {
        return this.user;
    }
    getTime() {
        return this.time || new Date();
    }
    getMessage() {
        return this.message || "";
    }
    getReply() {
        return this.reply;
    }
    /**
     * Method
     */
    build() {
        return new Message(this);
    }
}
