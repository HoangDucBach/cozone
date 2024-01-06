import {CreateRoomForm} from "./CreateRoom";
import {ServerNavbar} from "../../../headers/ServerNavbar";
import {ServerRooms} from "./ServerRooms";
import React, {useState} from "react";

export function Server() {
    const [serverRooms, setServerRooms] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    return (
        <div className="server">
            <ServerNavbar
                setIsFormVisible={setIsFormVisible}
            />
            <CreateRoomForm
                serverRooms={serverRooms}
                setServerRooms={setServerRooms}
                isFormVisible={isFormVisible}
                setIsFormVisible={setIsFormVisible}
            />

            <ServerRooms
                serverRooms={serverRooms}
                setServerRooms={setServerRooms}
            />
        </div>
    );
}