"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerSocket_1 = require("./classes/ServerSocket");
/**
 * Config.
 */
const server = require('../server');
const io = ServerSocket_1.ServerSocket.getInstance(server);
io.on('connection', socket => {
    console.log("Has new user ", socket.id);
});
