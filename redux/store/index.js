import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = null;
export function getStore (initialState = {}) {
    if (store === null) {
        store = createStore(reducer, initialState, composeEnhancers(
            // applyMiddleware(thunk)
        ));
    }
    return store;
};