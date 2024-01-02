import {Event} from './event.mediator';
import {IClientToServer, IServerToClient} from "../sockets/classes/ISocket";
import {Room} from "../classes/Room";
import {ServerSocket} from "../sockets/classes/ServerSocket";
import RoomManager from "../models/room.model";
import server from "../app";
enum RoomEventType {
    ADD_MEMBER,
    REMOVE_MEMBER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
}

class RoomMediator  implements IClientToServer, IServerToClient {
    private room: Room = new Room("anonymous");
    private server: ServerSocket = ServerSocket.getInstance();
    constructor() {
        RoomManager.getInstance().addRoom(this.room);
    }

    receiveEvent(event: String, data: any) {
    }

    sendEvent(event: String, data: any) {
    }


}