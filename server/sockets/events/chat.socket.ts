import {DefaultEventsMap} from "socket.io/dist/typed-events";
import {Server, Socket} from "socket.io";
import {ServerSocket} from "../classes/ServerSocket";

export class ChatEvent {
    private io: Server;

    constructor(io: Server) {
        this.io = io;
    }

    public handleSendMessage = (message: any) => {
        this.io.emit("receive_message", message);
    };

}