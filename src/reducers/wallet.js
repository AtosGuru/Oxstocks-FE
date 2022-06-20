import { GET_TRANSACTION, SEND_TOKEN } from "../actions/types";

const initialState = {
    transactions: []
}

function walletReducer(state=initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transactions: payload
            }
        default: 
            return state;
    }
}

export default walletReducer;