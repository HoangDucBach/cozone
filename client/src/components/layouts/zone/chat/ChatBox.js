import {ZoneTag} from "../../../ui/buttons/ZoneTag";
import './chat.scss';
import {Message} from "./Message";

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

function ChatState() {
    return (
        <div className="chat-state">
            <Message
                username="Hoc"
                time="26/12/2023 6:26:PM"
                message="This is a long message..."
            />
        </div>
    )
}

function SendMessage() {
    return (
        <div className="send-message">
            <div className="send-message__layout">
                <p className="send-message__input" contentEditable
                   placeholder="Your message..."
                   spellCheck={"false"}
                >
                </p>
            </div>
        </div>
    );
}

export function ChatBox() {
    return (
        <div className="chat-box">
            <RoomState name="Idol Team" state={"128 member, 1online"} tag="chat"/>
            <ChatState/>
            <SendMessage/>
        </div>
    )
}