import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import event from './events/reducers';
import user from './user/reducers';

const rootReducer = combineReducers({
    router,
    user,
    event
});

export default rootReducer;
