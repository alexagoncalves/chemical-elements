import {
    ELEMENTS_DATA_SAVE,
    GET_CURRENT_ELEMENTS_IN_DISPLAY
} from "../actions/elements";

export const initialState = {
    data: [],
    elementsDisplay: [117, 118, 1, 2, 3],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ELEMENTS_DATA_SAVE:
            return{
                ...state,
                data: action.elements,
            }
        
        case GET_CURRENT_ELEMENTS_IN_DISPLAY:
            return {
                ...state,
                elementsDisplay: action.display,
            }    

        default:
            return state;
    }
};

export default reducer;