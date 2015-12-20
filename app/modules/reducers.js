import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import cart from './cart';
import products from './products';

const rootReducer = combineReducers({
    router,
    cart,
    products
});

export default rootReducer;
