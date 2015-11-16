import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../views/App';
import Collections from '../views/Collections';

const routes = (
    <Router>

        <Route path="/"
               component={App}>

            <IndexRoute component={Collections}/>

        </Route>

    </Router>
);

export default routes;
