import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

/**
 * A component to represent a Collection
 */
export default class Collection extends Component {

    static propTypes = {
        /**
         * Name of the component
         */
        name: PropTypes.string.isRequired
    };

    render() {

        const {name} = this.props;

        return (
            <Link to="/collections/abc"
                  className="box box-round box-raised">
                <h2>
                    {name}
                </h2>
            </Link>
        );
    }
}
