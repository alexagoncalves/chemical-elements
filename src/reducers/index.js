import { combineReducers } from "redux";

import elementsReducer from './elements';
import loaderReducer from './loader';
import appReducer from './app';

const rootReducer = combineReducers({
    elements: elementsReducer,
    loader: loaderReducer,
    app: appReducer,
});

export default rootReducer;