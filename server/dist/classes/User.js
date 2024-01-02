"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var BotEyeType;
(function (BotEyeType) {
    BotEyeType[BotEyeType["NORMAL"] = 0] = "NORMAL";
    BotEyeType[BotEyeType["ANGRY"] = 1] = "ANGRY";
    BotEyeType[BotEyeType["SAD"] = 2] = "SAD";
    BotEyeType[BotEyeType["HAPPY"] = 3] = "HAPPY";
})(BotEyeType || (BotEyeType = {}));
var BotMouthType;
(function (BotMouthType) {
    BotMouthType[BotMouthType["SMILE"] = 0] = "SMILE";
    BotMouthType[BotMouthType["SAD"] = 1] = "SAD";
})(BotMouthType || (BotMouthType = {}));
class Avatar {
    constructor(backgroundColor, botColor, eye, mouth) {
        this.backgroundColor = backgroundColor;
        this.botColor = botColor;
        this.eye = eye;
        this.mouth = mouth;
    }
}
class User {
    constructor(name, socketId, avatar) {
        this.name = name || "Anonymous";
        this.socketId = socketId || null;
        this.avatar = avatar || null;
    }
    /**
     * Setter and getter.
     */
    getName() {
        return this.name;
    }
    getSocketId() {
        return this.socketId;
    }
    getAvatar() {
        return this.avatar;
    }
    setName(name) {
        this.name = name;
    }
    setSocketId(socketId) {
        this.socketId = socketId;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    /**
     * Method.
     */
    sendMessage() {
    }
}
exports.User = User;
