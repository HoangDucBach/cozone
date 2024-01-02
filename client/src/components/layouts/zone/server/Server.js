import {CreateRoom} from "./CreateRoom";
import {ServerNavbar} from "../../../headers/ServerNavbar";
import {ServerRooms} from "./ServerRooms";
import {useState} from "react";

export function Server() {
    const [serverRooms, setServerRooms] = useState([]);
    return (
        <div className="server">
            <ServerNavbar/>
            <CreateRoom
                serverRooms={serverRooms}
                setServerRooms={setServerRooms}
            />
            <ServerRooms
                serverRooms={serverRooms}
            />
        </div>
    )
}