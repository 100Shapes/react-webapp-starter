import {CART_ITEM_ADDED} from '../cart/constants';
import * as ActionTypes from './constants';
import {Map} from 'immutable';

export default (state = Map(), action) => {

    switch (action.type) {
        case ActionTypes.PRODUCTS_RECEIVED:

            return Map(
                action.products.map(product => {
                    const {id, ...productProps} = product;
                    return [id, Map(productProps)];
                })
            );

        case CART_ITEM_ADDED:
            const {productId} = action;

            return state.updateIn([productId, 'inventory'], (quantity) => {
                return quantity - 1;
            });

        default:
            return state;
    }

};

export const getProduct = (state, id) => {
    return state.get(id);
};

export const getAvailableProducts = (state) => {
    return state.filter(product => {
        return product.inventory > 0;
    });
};
