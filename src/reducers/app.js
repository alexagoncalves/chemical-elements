import {
    SWITCH_DARK_MODE
} from "../actions/app";

export const initialState = {
    darkMode: false,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SWITCH_DARK_MODE:
            return {
                ...state,
                darkMode: action.value,
            }
        default:
            return state;
    }
}

export default reducer;