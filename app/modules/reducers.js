import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import event from './events/reducers';

const rootReducer = combineReducers({
    router,
    event
});

export default rootReducer;
