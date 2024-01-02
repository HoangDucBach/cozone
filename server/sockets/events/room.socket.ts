import {DefaultEventsMap} from "socket.io/dist/typed-events";
import {Server, Socket} from "socket.io";
import {ServerSocket} from "../classes/ServerSocket";

export class RoomEvent {
    private io: Server;

    constructor(io: Server) {
        this.io = io;
    }

    public handleCreateRoom = (room: any) => {
        console.log(room);
        this.io.emit("create_room", room);
    };

}