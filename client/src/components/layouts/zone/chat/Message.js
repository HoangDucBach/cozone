import "./chat.scss";
export function Message(props) {
    return (
        <div className="message">
            <div className="message-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <circle cx="19.25" cy="19.3472" r="18.75" fill="#33FF3B"/>
                </svg>
            </div>
            <div className="message-layout">
                <div className="message-user__layout">
                    <div className="message-user__name">
                        {props.username}
                    </div>
                    <div className="message-user__time">
                        {props.time}
                    </div>
                </div>
                <div className="message-content">
                    {props.message}
                </div>
            </div>
        </div>
    )
}