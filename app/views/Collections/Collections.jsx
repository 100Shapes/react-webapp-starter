import React, {Component} from 'react';
import 'css/main.less';
import './Collections.less';

/**
 * Collections View
 */
export default class Collections extends Component {

    render() {

        return (
            <div >

                <h1>Collections</h1>

                <ul>
                    <li>
                        <a href="#"
                           className="box">
                            #Dog
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="box">
                            #Starwars
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="box">
                            #Architecture
                        </a>
                    </li>
                </ul>

            </div>
        );
    }
}
