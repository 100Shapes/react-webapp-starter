import React from 'react';
import Collection from '../Collection';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';

const {describe, it} = global;

const renderComponent = (props = {}) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
    < Collection
    {...
        props
    }
    />
    )
    ;
    return renderer.getRenderOutput();
};

describe('Component: Collection', () => {
    it('renders an h1 with greeting className', () => {
        const {props, type} = renderComponent();
        expect(props.className).to.contain('greeting');
        expect(type).to.equal('h1');
    });

    it('sets default greeting to World', () => {
        const {props} = renderComponent();
        expect(props.children.join('')).to.equal('Collection World!');
    });

    it('sets greeting to name value', () => {
        const {props} = renderComponent({name: 'Human'});
        expect(props.children.join('')).to.equal('Collection Human!');
    });
});
