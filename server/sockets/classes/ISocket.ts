import {Socket} from "socket.io";
import {User} from "../../classes/User";
import {Room} from "../../classes/Room";

interface ISocket {
    handleConnection(socket: Socket): void;
}

export interface IClientToServer {
    // @ts-ignore
    sendEvent(event: String, data: any);
}

export interface IServerToClient {
    // @ts-ignore
    receiveEvent(event: String, data: any);
}

export interface ISocketData {
    user: User,
}

export default ISocket;