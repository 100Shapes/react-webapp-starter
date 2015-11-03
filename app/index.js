/**
 * App's entry point
 * Creates and inserts a div and mounts the app on it
 */
import './styles/main.less';

import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

const log = debug('app:bootstrap');

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
    debug.enable('app:*');
}

log('creating app node');
const appNode = document.createElement('div');
appNode.id = 'app';

log('adding app node to body');
document.body.appendChild(appNode);

log('mounting app');
ReactDOM.render(<Hello/>, appNode, () => {
    log('finished mounting app');
}
)
;
