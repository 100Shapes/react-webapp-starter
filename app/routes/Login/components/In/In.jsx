import React, {Component, PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

/**
 * The In Component
 */
export default class In extends Component {

    static propTypes = {

        event: ImmutablePropTypes.mapOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                subtitle: PropTypes.number.isRequired
            }).isRequired
        ).isRequired,

        user: ImmutablePropTypes.mapOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            }).isRequired
        )
    };

    render() {

        return (
            <div>
                <h1>In</h1>
            </div>
        );
    }
}
