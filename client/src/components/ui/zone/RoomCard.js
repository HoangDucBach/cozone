import './zone-ui.scss';
export function RoomCard(props) {
    const roomName = props.roomName;
    const time = props.time;
    return (
        <div className="room-card">
            <div className="room-card__avatar">
                <svg width='100%' height="100%" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" rx="10px" fill="#B312FF" />
                </svg>

            </div>
            <div className="room-card__info-layout">
                <div className="room-card__title">{roomName}</div>
                <div className="room-card__time-layout">
                    <div className="room-card__time-title">Created</div>
                    <div className="room-card__time">{time}</div>
                </div>
            </div>
            <button className="room-card__button--join">Join</button>
        </div>
    );

}