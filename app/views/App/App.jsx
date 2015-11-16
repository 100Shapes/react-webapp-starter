import React, {Component} from 'react';
import 'css/main.less';
import './App.less';

/**
 * App View
 */
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div >

                <header>
                    Header
                    <hr/>
                </header>

                {React.cloneElement(this.props.children)}

                <footer>
                    <hr/>
                    Footer
                </footer>

            </div>
        );
    }
}
