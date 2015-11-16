import React, {Component, PropTypes} from 'react';

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
            <a href="#"
               className="box box-round">
                <h2>
                    {name}
                </h2>
            </a>
        );
    }
}
