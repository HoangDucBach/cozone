import React, {useRef, useState} from 'react';
import './server.scss';
import {socket} from "../../../sockets/socket";
import {SocketEvent} from "../../../sockets/SocketEvent";
import {RoomCard} from "../../../ui/zone/RoomCard";

export function CreateRoomForm(props) {
    const roomNameRef = useRef(null);
    const roomPasswordRef = useRef(null);
    const serverRooms = props.serverRooms;
    const setServerRooms = props.setServerRooms;
    const isFormVisible = props.isFormVisible;
    const setIsFormVisible=props.setIsFormVisible

    const FieldInput = (props) => {
        const handleClear = () => {
            if (props.field === 'Name') {
                roomNameRef.current.value = '';
            } else if (props.field === 'Password') {
                roomPasswordRef.current.value = '';
            }
        };
        return (
            <div className="field-input">
                <div className="field-input__layout-title-input">
                    <div className="field-input__title">
                        {props.field}
                    </div>
                    <input
                        type={props.field === 'Name' ? 'text' : 'password'}
                        placeholder={props.placeholder}
                        id={props.field}
                        ref={props.field === 'Name' ? roomNameRef : roomPasswordRef}
                    />
                </div>
                <div className="field-input__clear" onClick={handleClear}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 1.75L2 19.75ZM2 1.75L20 19.75Z"
                              fill="#D8A353"/>
                        <path d="M20 1.75L2 19.75M2 1.75L20 19.75" stroke="#8526FE" strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        )
    };


    const handleCreateRoom = (event) => {
        event.preventDefault();
        const name = roomNameRef.current.value;
        const password = roomPasswordRef.current.value;

        const room = {
            name: name,
            password: password,
            time: new Date().toLocaleString(),

        };
        socket.emit(SocketEvent.CREATE_ROOM, room);
    };
    const handleToggleForm = () => {
        setIsFormVisible(false);

    };
    return (
        <>
            {isFormVisible && <form
                action="/myzone/server"
                className="create-room-form"
                onSubmit={handleCreateRoom}
            >
                <button className="create-room-form__exit-button" onClick={handleToggleForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 1.75L2 19.75ZM2 1.75L20 19.75Z"
                              fill="#D8A353"/>
                        <path d="M20 1.75L2 19.75M2 1.75L20 19.75" stroke="#8526FE" strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="create-room-form__title">
                    Create <span id="span-1">Room</span>
                </div>
                <FieldInput field="Name" placeholder="Room's name"/>
                <FieldInput field="Password" placeholder="Room's password"/>
                <button type="submit" className="create-room-form__button">Create</button>
            </form>
            }
        </>
    );
}
