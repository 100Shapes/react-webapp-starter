import * as actionTypes from './constants';
import {Map} from 'immutable';

const initialState = Map({
    products: Map(),
    total: 0
});

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.CHECKOUT_REQUESTED:
            return initialState;

        case actionTypes.CHECKOUT_FAILED:
            return action.cart;

        case actionTypes.CART_ITEM_ADDED:
            const {productId} = action;

            return state.updateIn(['products', productId], 0, quantity => {
                return quantity + 1;
            });

        default:
            return state;
    }
};

export const getCartProducts = (state) => {
    return state.cart.get('products').map((quantity, id) => {

        const product = state.products.get(id);

        return Map(product).set('quantity', quantity);
    });
};

export const getTotal = (state) => {
    return state.cart.get('products').reduce((subtotal, quantity, id) => {

        const product = state.products.get(id);
        return subtotal + (product.get('price') * quantity);

    }, 0).toFixed(2);
};
