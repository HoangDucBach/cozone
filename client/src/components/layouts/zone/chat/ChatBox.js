import { ZoneTag } from "../../../ui/buttons/ZoneTag";
import "./chat.scss";
import { Message } from "./Message";
import {useEffect, useRef} from "react";
import { socket } from "../../../sockets/socket";
import { SocketEvent } from "../../../sockets/SocketEvent";
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "../../../../redux/actions/message.action";
import $ from 'jquery';

function RoomState(props) {
    return (
        <div className="room-state">
            <div className="room-state-avatar__layout">
                <div className="room-state-avatar"></div>
                <div className="room-state-avatar_tag">
                    <div className="room-state-name">{props.name}</div>
                    <div className="room-state-property">{props.state}</div>
                </div>
            </div>
            <div className="room-sate-tag">
                <ZoneTag tag={props.tag} />
            </div>
        </div>
    );
}

function ChatState() {
    const chatState = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const chatStateDOM = $('.chat-state');

    useEffect(() => {
        chatStateDOM.scrollTop(chatStateDOM.prop('scrollHeight'));
    }, [chatState]);
    useEffect(() => {
        socket.on(SocketEvent.RECEIVE_MESSAGE, (message) => {
            dispatch(addMessage(message));
        });

        return () => {
            socket.off(SocketEvent.RECEIVE_MESSAGE);
        };
    }, [dispatch]);

    return (
        <div className="chat-state">
            {chatState.map((message, index) => (
                <Message
                    key={index} // Make sure each item has a unique key
                    username={message.socketId.substring(0, 3)}
                    time={message.time}
                    message={message.message}
                />
            ))}
        </div>
    );
}

function SendMessage() {
    const dispatch = useDispatch();
    function handleSendMessage(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            if (socket.connected) {
                const newMessage = {
                    username: "Hoc",
                    socketId: socket.id,
                    to: socket.id,
                    time: new Date().toLocaleString(),
                    message: event.target.textContent.trim(),
                };

                socket.emit(SocketEvent.SEND_MESSAGE, newMessage);
                // dispatch(addMessage(newMessage));
                event.target.textContent = "";
            } else {
                console.log("Socket not connected. Message not sent.");
            }
        }
    }

    return (
        <div className="send-message">
            <div className="send-message__layout">
                <p
                    className="send-message__input"
                    contentEditable
                    placeholder="Your message..."
                    spellCheck={"false"}
                    onKeyDown={handleSendMessage}
                />
            </div>
        </div>
    );
}

export function ChatBox() {
    return (
        <div className="chat-box">
            <RoomState name="Idol Team" state={"128 member, 1 online"} tag="chat" />
            <ChatState />
            <SendMessage />
        </div>
    );
}
