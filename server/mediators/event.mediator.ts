import {MessageEvent} from "./MessageEvent";
import {IClientToServer, IServerToClient} from "../sockets/classes/ISocket";

enum EventType {
    CHAT,
    WATCH
}

class EventFactory {

    public static createEvent(event: EventType) {
        switch (event) {
            case EventType.CHAT:
                return new MessageEvent();

        }
    }
}
