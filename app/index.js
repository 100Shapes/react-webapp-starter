/**
 * App's entry point
 * Creates and inserts a div and mounts the app on it
 */
import debug from 'debug';
import ReactDOM from 'react-dom';
import routes from './config/routes';

const log = debug('app:bootstrap');

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
    debug.enable('app:*');
}

log('mounting app');
ReactDOM.render(routes, document.getElementById('app'), () => {
    log('finished mounting app');
});
