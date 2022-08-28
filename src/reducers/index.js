import { combineReducers } from "redux";

import elementsReducer from './elements';
import loaderReducer from './loader'

const rootReducer = combineReducers({
    elements: elementsReducer,
    loader: loaderReducer,
});

export default rootReducer;