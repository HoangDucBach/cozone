import {useState} from "react";

export function ServerRooms(props) {
    const serverRooms = props.serverRooms;
    return (
        <div className="server-rooms">
            {
                serverRooms.map(value => value)
            }
        </div>
    );
}