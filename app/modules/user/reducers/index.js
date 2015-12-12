import {Map} from 'immutable';
import * as actions from '../constants';

const initialState = Map({});

const user = (state = initialState, action) => {
    switch (action.type) {

        case actions.USER_SIGNIN_FULFILLED:
            return state;

        default:
            return state;
    }
};

export default user;

