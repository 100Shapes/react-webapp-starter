import React from 'react';
import expect from 'expect.js';
import * as actions from './actions';
import * as constants from './constants';

const {describe, it} = global;

xdescribe('Module: user (actions)', () => {

    it('defines an startEvent()', () => {
        expect(actions.startEvent).to.be.a('function');
    });

    it('startEvent returns an action with EVENT_START type', () => {
        expect(actions.startEvent())
            .to.have.property('action', constants.EVENT_STARTED);
    });

});
