import React, {Component} from 'react';
import 'css/main.less';
import './Collections.less';

import Collection from '../../components/Collection';

/**
 * Collections View
 */
export default class Collections extends Component {

    renderItems() {
        return ['#starwars', '#dog'].map((collection, i) => {
            const name = collection;
            return (
                <li className="grid-item 1/2 mb">
                    <Collection name={name}
                                key={i}/>
                </li>
            );
        });

    }

    render() {
        const items = this.renderItems();

        return (
            <div className="wrapper">
                <h1>Collections</h1>

                <p>A collection of free Climb.social feeds.</p>

                <ul className="grid list-bare">
                    {items}
                </ul>
            </div>

        );
    }
}
