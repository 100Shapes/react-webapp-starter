import React, {Component, PropTypes} from 'react';
import Product from './Product';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class ProductItem extends Component {
    render() {
        const {product} = this.props;

        return (
            <div
                style={{marginBottom: 20}}>
                <Product
                    title={product.get('title')}
                    price={product.get('price')}/>
                <button
                    className="btn btn-sm"
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.get('inventory') > 0 ? '' : 'disabled'}>
                    {product.get('inventory') > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        );
    }
}

ProductItem.propTypes = {
    product: ImmutablePropTypes.contains({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
};
