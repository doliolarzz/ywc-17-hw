import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './index';

const loggerMiddleware = createLogger();

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware
    )
);