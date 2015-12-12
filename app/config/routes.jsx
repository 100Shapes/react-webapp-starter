import React from 'react';
import {Router, Route} from 'react-router';
import {createHistory, useBasename} from 'history';

import App from '../routes/App';
import Event from '../routes/Event';

const history = useBasename(createHistory)({
    basename: '/'
});

const routes = (
    <Router history={history}>

        <Route path="/"
               component={App}>

            <Route path=":eventId"
                   component={Event}/>

        </Route>

    </Router>
);

export default routes;
