/**
 * App's entry point
 * Creates and inserts a div and mounts the app on it
 */
import debug from 'debug';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
const log = debug('app:bootstrap');

import routes from './config/routes';
import configureStore from './stores/configureStore';

const store = configureStore();

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
    debug.enable('app:*');
}

const root = () => {
    return (
        <Provider store={store}>
            {routes}
        </Provider>
    );
};

log('mounting app');
const rootElement = document.getElementById('app');
render(root(), rootElement, () => {
    log('finished mounting app');
});

