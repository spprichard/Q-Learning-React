import React from 'react';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './components/HelloWorldList';
import HelloWorld from './components/HelloWorld';
import AddGreeter from './components/AddGreeter';

describe(HelloWorld, () => {
    const component = shallow(
        <HelloWorldList />
    );

    // snapshot test
    it("renders and matches out snapshot", () => {
        const component = renderer.create(
            <HelloWorldList />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("contains an AddGreeter subcompenent", () => {
        expect(component.find(AddGreeter)).toHaveLength(1);
    });

    it("contains the same number of HelloWorld components as greetings", () => {
        const helloWorlds = component.find(HelloWorld).length;
        const greetings = component.state('greetings').length;
        expect(helloWorlds).toEqual(greetings);
    });

    it("adds another greeting when add greeting function is called", () => {
        const before = component.find(HelloWorld).length;
        component.instance().addGreeting("Sample");
        component.update();
        const after = component.find(HelloWorld).length
        expect(after).toBeGreaterThan(before);
    });

    it("removes greeting when remove greeting function is called", () => {
        const before = component.find(HelloWorld).length;
        component.instance().removeGreeting("Sample")
        component.update();
        const after = component.find(HelloWorld).length
        expect(after).toBeLessThan(before);
    });
});