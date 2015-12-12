import React, {Component, PropTypes} from 'react';
/**
 * Event Component
 */
export default class Event extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    };

    render() {
        const {name, subtitle} = this.props;
        return (
            <div>
                <h2 className="mb0">{name}</h2>
                <p>{subtitle}</p>
            </div>
        );
    }
}
