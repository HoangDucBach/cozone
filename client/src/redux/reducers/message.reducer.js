import {combineReducers} from "redux";

export const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.payload];
        default:
            return state;
    }
};