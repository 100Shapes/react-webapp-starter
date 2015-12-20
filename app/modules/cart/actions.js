import shop from '../../api/shop';
import * as types from './constants';

const addToCartUnsafe = (productId) => {
    return {
        type: types.CART_ITEM_ADDED,
        productId
    };
};

export const addToCart = (productId) => {
    return (dispatch, getState) => {
        if (getState().products.getIn([productId, 'inventory']) > 0) {
            dispatch(addToCartUnsafe(productId));
        }
    };
};

export const checkout = (products) => {
    return (dispatch, getState) => {
        const cart = getState().cart;

        dispatch({
            type: types.CHECKOUT_REQUESTED
        });

        shop.buyProducts(products, () => {
            dispatch({
                type: types.CHECKOUT_SUCCESSFUL,
                cart
            });
            // Replace the line above with line below to rollback on failure:
            // dispatch({ type: types.CHECKOUT_FAILURE, cart })
        });
    };
};
