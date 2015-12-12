import {Map} from 'immutable';
import * as actions from '../constants';

const initialState = Map({
    name: 'Muse live at the O2',
    subtitle: 'Support by Alien Ant Farm'
});

const events = (state = initialState, action) => {
    switch (action.type) {

        case actions.EVENT_STARTED:
            return state;

        default:
            return state;
    }
};

export default events;
