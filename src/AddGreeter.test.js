import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './components/AddGreeter';

describe(AddGreeter, () => {
    const mockAddGreeting = jest.fn();
    const component = shallow (
        <AddGreeter addGreeting={mockAddGreeting}/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <AddGreeter/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("comtains form elements", () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });



});
