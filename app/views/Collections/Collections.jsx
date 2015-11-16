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
                <Collection name={name} key={i}/>
            );
        });

    }

    render() {
        const items = this.renderItems();

        return (
            <div>
                <h1>Collections</h1>

                {items}
            </div>
        );
    }
}
