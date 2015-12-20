import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {checkout} from '../modules/cart/actions';
import {getTotal, getCartProducts} from '../modules/cart';
import Cart from '../components/Cart';
import ImmutablePropTypes from 'react-immutable-proptypes';

class CartContainer extends Component {
    render() {
        const {products, total} = this.props;

        return (
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={() => this.props.checkout()}/>
        );
    }
}

CartContainer.propTypes = {
    products: ImmutablePropTypes.mapOf(ImmutablePropTypes.contains({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: getCartProducts(state),
        total: getTotal(state)
    };
};

export default connect(
    mapStateToProps,
    {checkout}
)(CartContainer);
