import {createStore, applyMiddleware, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../config/routes';
import thunk from 'redux-thunk';
import rootReducer from '../modules/reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({routes, createHistory})
)(createStore);

const configureStore = (initialState) => {
    return finalCreateStore(rootReducer, initialState);
};

export default configureStore;

