export const serverRoomsReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_ROOM':
            return [...state, action.payload];
        default:
            return state;
    }
};
