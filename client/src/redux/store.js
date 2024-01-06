import {combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {messageReducer} from "./reducers/message.reducer";
import {serverRoomsReducer} from "./reducers/room.reducer";
const rootReducer = combineReducers({
    messages: messageReducer,
    serverRooms:serverRoomsReducer,
    // Add other reducers if needed
});
export const store = configureStore({
    reducer: rootReducer,
});