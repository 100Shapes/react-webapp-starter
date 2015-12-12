import React, {Component, PropTypes} from 'react';

/**
 * App component
 */
export default class App extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <div>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}
