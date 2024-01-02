import {ZoneTag} from "../../../ui/buttons/ZoneTag";
import './chat.scss';
import {Message} from "./Message";
import $ from "jquery";
import {useEffect, useState} from "react";
import {socket} from "../../../sockets/socket";
import {SocketEvent} from "../../../sockets/SocketEvent";
function RoomState(props) {
    return (
        <div className="room-state">
            <div className="room-state-avatar__layout">
                <div className="room-state-avatar">
                </div>
                <div className="room-state-avatar_tag">
                    <div className="room-state-name">
                        {props.name}
                    </div>
                    <div className="room-state-property">
                        {props.state}
                    </div>
                </div>
            </div>
            <div className="room-sate-tag">
                <ZoneTag tag={props.tag}/>
            </div>
        </div>
    )
}

function ChatState(props) {
    const chatState = props.chatState;
    const setChatState = props.setChatState;
    const chatStateDOM = $('.chat-state')
    useEffect(() => {
        chatStateDOM.scrollTop(chatStateDOM.prop('scrollHeight'));
    }, [chatState]);
    useEffect(() => {
        socket.on(SocketEvent.RECEIVE_MESSAGE, message => {
            setChatState(prevState => [...prevState, (
                <Message
                    username={message.socketId.substring(0, 3)}
                    time={message.time}
                    message={message.message}
                />
            )]);
            return () => socket.off("receive_message");

        });
    }, []);
    return (
        <div className="chat-state">
            {
                chatState.map((value) => {
                    return value;
                })
            }
        </div>
    );
}

function SendMessage() {
    function handleSendMessage(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Check if the socket is connected before emitting the event
            if (socket.connected) {
                const newMessage = {
                    username: "Hoc",
                    socketId: socket.id,
                    to: socket.id,
                    time: new Date().toLocaleString(),
                    message: event.target.textContent.trim()
                };

                socket.emit(SocketEvent.SEND_MESSAGE, newMessage);
                event.target.textContent = '';
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
    const [chatState, setChatState] = useState([]);
    return (
        <div className="chat-box">
            <RoomState name="Idol Team" state={"128 member, 1 online"} tag="chat"/>
            <ChatState chatState={chatState} setChatState={setChatState}/>
            <SendMessage chatState={chatState} setChatState={setChatState}/>
        </div>
    )
}