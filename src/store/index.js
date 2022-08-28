import { applyMiddleware, compose, createStore } from 'redux';

import reducers from 'src/reducers';
import elementsApiMiddleware from 'src/middlewares/elementsApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        elementsApiMiddleware,
    ),
);

const store = createStore(
    reducers,
    enhancers,
);

export default store;