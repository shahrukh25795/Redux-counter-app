let initialState = {
    increment : 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('INCREMENT_COUNT'):
            return {
                ...state,
                increment: action.payload.increment,
            }
        default:
            return state
    }
};

export default reducer;