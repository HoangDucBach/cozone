// ServerRooms.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../../sockets/socket";
import { SocketEvent } from "../../../sockets/SocketEvent";
import {receiveRoom} from "../../../../redux/actions/room.action";
import {RoomCard} from "../../../ui/zone/RoomCard";

export function ServerRooms() {
    const serverRooms = useSelector((state) => state.serverRooms);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on(SocketEvent.RECEIVE_ROOM, (room) => {
            dispatch(receiveRoom(room));
        });

        return () => {
            // socket.off(SocketEvent.RECEIVE_ROOM);
        };
    }, [dispatch]);

    return (
        <div className="server-rooms">
            {serverRooms.map((value, index) => (
                <RoomCard key={index} roomName={value.name} time={value.time} />
            ))}
        </div>
    );
}
