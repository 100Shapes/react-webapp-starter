import React, {Component, PropTypes} from 'react';
import Product from './Product';
import {map} from 'react-immutable-proptypes';

export default class Cart extends Component {

    renderEmptyCart() {
        return (
            <em>Please add some products to cart.</em>
        );
    }

    render() {
        const {products, total, onCheckoutClicked} = this.props;

        const hasProducts = products.size > 0;

        if (!hasProducts) {
            return this.renderEmptyCart();
        }

        const nodes = products
            .entrySeq()
            .map(entry => {
                const [id, product] = entry;
                return (
                    <Product
                        title={product.get('title')}
                        price={product.get('price')}
                        quantity={product.get('quantity')}
                        key={id}/>
                );
            });

        return (
            <div>
                <h3>Your Cart</h3>
                <div>{nodes}</div>
                <p>Total: &#36;{total}</p>
                <button className="btn btn-primary"
                        onClick={onCheckoutClicked}
                        disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
            </div>
        );
    }
}

Cart.propTypes = {
    products: map,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
};
