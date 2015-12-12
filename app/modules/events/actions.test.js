import React from 'react';
import expect from 'expect.js';
import * as actions from './actions';

const {describe, it} = global;

describe('Module: events (actions)', () => {

    it('defines an startEvent()', () => {
        expect(actions.startEvent).to.be.a('function');
    });

});
