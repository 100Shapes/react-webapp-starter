import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../views/App';
import CollectionsList from '../views/Collections/List';
import CollectionsDetail from '../views/Collections/Detail';

const routes = (
    <Router>

        <Route path="/"
               component={App}>

            <IndexRoute component={CollectionsList}/>

            <Route path="collections/:id"
                   component={CollectionsDetail}/>

        </Route>

    </Router>
);

export default routes;
