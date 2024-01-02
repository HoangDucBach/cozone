import express from "express";
import {YoutubeAPI} from "../api/youtube/YoutubeAPI";
import {Room} from "../classes/Room";
import RoomManager from "../models/room.model";
import {MessageBuilder} from "../classes/Message";
import {User} from "../classes/User";
import ServerManager from "../models/server.model";
import {ServerSocket} from "../sockets/classes/ServerSocket";
import {MessageSocketEvent} from "../sockets/events/server.socket";

const router = express.Router();


router.post('/server', async (req, res) => {
    const data = req.body;
    const user = new User(data.username, data.socketId, null);
    const message =
        new MessageBuilder()
            .setUser(user)
            .setMessage(data.message)
            .setTime(data.time);
    ServerManager.getInstance().getMessageHistory().push(message);
    // console.log(ServerManager.getInstance().getMessageHistory());
});
// router.get('/server', async (req, res) => {
//     // const data = await YoutubeAPI.getDescribe('7sN5SW-_JyM');
//     // res.json([...RoomManager.getInstance().getRooms()]);
//
// });
// router.post('/server', async (req, res) => {
//     const data = req.body;
//     const room: Room = new Room(data.name, data.password);
//     RoomManager.getInstance().addRoom(room);
//
// });
module.exports = router;