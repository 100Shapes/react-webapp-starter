import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {addToCart} from '../modules/cart/actions';

import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';

class ProductsContainer extends Component {

    render() {
        const {products} = this.props;
        const items = products.entrySeq().map(entry => {
            const [id, product] = entry;
            return (
                <ProductItem
                    key={id}
                    product={product}
                    onAddToCartClicked={() => this.props.addToCart(id)}/>
            );
        });

        return (
            <ProductsList title="Products">
                {items}
            </ProductsList>
        );
    }
}

ProductsContainer.propTypes = {
    products: ImmutablePropTypes.mapOf(ImmutablePropTypes.contains({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const {products} = state;
    return {
        products
    };
};

export default connect(
    mapStateToProps,
    {addToCart}
)(ProductsContainer);
