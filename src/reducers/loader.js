import { DATA_LOADING } from "../actions/loader";

const initialState = {
    loading: true
  };


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case DATA_LOADING:
        return {
          ...state,
          loading: action.value,
        };

      default:
        return state;
    }
  };

export default reducer;