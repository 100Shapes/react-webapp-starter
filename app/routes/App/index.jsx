import React, {Component} from 'react';
import 'css/main.less';

import EventContainer from '../Event';

/**
 * App component
 */
export default class App extends Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <EventContainer />
            </div>
        );
    }
}
