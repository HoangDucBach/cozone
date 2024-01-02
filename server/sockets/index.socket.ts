import express from "express";
import {ServerSocket} from "./classes/ServerSocket";

/**
 * Config.
 */
const server = require('../server');
const io = ServerSocket.getInstance(server);
// io.on('connection', socket => {
//     // console.log("Has new user ",socket.id);
//     console.log("Has new user ", socket.connected);
//
// });
//

