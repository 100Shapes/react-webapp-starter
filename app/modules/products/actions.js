import shop from '../../api/shop';
import * as types from './constants';

export const receiveProducts = (products) => {
    return {
        type: types.PRODUCTS_RECEIVED,
        products
    };
};

export const getAllProducts = () => {
    return dispatch => {
        shop.getProducts(products => {
            dispatch(receiveProducts(products));
        });
    };
};
