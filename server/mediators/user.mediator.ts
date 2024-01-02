import { IClientToServer, IServerToClient } from "../sockets/classes/ISocket";
import { Room } from "../classes/Room";
import { ServerSocket } from "../sockets/classes/ServerSocket";
import RoomManager from "../models/room.model";
import {User} from '../classes/User'
enum UserEventType {
    ADD_USER,
    REMOVE_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
}

class UserMediator implements IClientToServer, IServerToClient {
    private user: User;
    private server: ServerSocket = ServerSocket.getInstance();

    constructor(name: string, roomName: string) {
        this.room = RoomManager.getInstance().getRoom(roomName);

        if (!this.room) {
            // Create the room if it doesn't exist
            this.room = new Room(roomName);
            RoomManager.getInstance().addRoom(this.room);
        }

        // Add the user to the room
        this.room.addMember(this.username);
    }

    receiveEvent(event: string, data: any) {
        switch (event) {
            case UserEventType.REMOVE_USER:
                this.handleRemoveUser(data);
                break;
            // Handle other events as needed
        }
    }

    sendEvent(event: string, data: any) {
        // Send event to the server
        this.server.receiveEvent(event, data);
    }

    private handleRemoveUser(data: any) {
        const removedUsername = data.username;

        // Remove the user from the room
        this.room.removeMember(removedUsername);
    }

    // Add other methods as needed
}

export { UserMediator, UserEventType };
