import {Server as HTTPServer} from 'http';
import {Server} from 'socket.io';
import {ChatEvent} from "../events/chat.socket";
import {RoomEvent} from "../events/room.socket";

export class ServerSocket {
    private static INSTANCE: ServerSocket;
    private readonly io: Server;
    private readonly chatEvent: ChatEvent ;
    private readonly roomEvent: RoomEvent ;

    private constructor(server?: HTTPServer) {
        // @ts-ignore
        this.io = new Server(server, {
            cors: {
                origin: process.env.URL,
                methods: ['GET', 'POST'],
            },
        })
        this.chatEvent = new ChatEvent(this.io);
        this.roomEvent = new RoomEvent(this.io);
        this.io.on('connection', socket => {
            socket.on("send_message", this.chatEvent.handleSendMessage);

            socket.on("create_room", this.roomEvent.handleCreateRoom);
        });

    }

    public getIO(): Server {
        return this.io;
    }

    public static getInstance(httpServer?: HTTPServer): Server {
        if (!ServerSocket.INSTANCE) {
            ServerSocket.INSTANCE = new ServerSocket(httpServer);
        }
        return ServerSocket.INSTANCE.io;
    }
}