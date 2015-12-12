import React from 'react';
import expect from 'expect.js';
import * as actions from './constants';

const {describe, it} = global;

xdescribe('Module: user (constants)', () => {

    it('defines an EVENT_LOAD type', () => {
        expect(actions.EVENT_LOAD).to.be.defined;
    });

    it('defines an EVENT_STARTED type', () => {
        expect(actions.EVENT_STARTED).to.be.defined;
    });

    it('defines an EVENT_ENDED type', () => {
        expect(actions.EVENT_ENDED).to.be.defined;
    });

    it('defines an EVENT_ACCESS_GRANTED type', () => {
        expect(actions.EVENT_ACCESS_GRANTED).to.be.defined;
    });

});
