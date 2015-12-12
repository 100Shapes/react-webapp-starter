import {createStore, applyMiddleware, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../config/routes';
import logger from 'redux-logger';
import rootReducer from '../modules/reducers';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
    reduxReactRouter({routes, createHistory}),
    applyMiddleware(thunkMiddleware, logger())
)(createStore);

const configureStore = (initialState) => {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../modules/reducers', () => {
            const nextRootReducer = require('../modules/reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
