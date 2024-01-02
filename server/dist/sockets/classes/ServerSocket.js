"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocket = void 0;
const socket_io_1 = require("socket.io");
class ServerSocket {
    constructor(server) {
        // @ts-ignore
        this.io = new socket_io_1.Server(server, {
            cors: {
                origin: process.env.URL,
                methods: ['GET', 'POST'],
                credentials: true,
            },
        });
    }
    getIO() {
        return this.io;
    }
    static getInstance(httpServer) {
        if (!ServerSocket.INSTANCE) {
            ServerSocket.INSTANCE = new ServerSocket(httpServer);
        }
        return ServerSocket.INSTANCE.io;
    }
}
exports.ServerSocket = ServerSocket;
