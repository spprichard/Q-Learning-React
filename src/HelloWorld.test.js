import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import HelloWorld from './components/HelloWorld';


describe(HelloWorld, () => {
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const mockReset = jest.fn();
    const component = shallow(
        <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>
    );

    // If somone makes changes to HelloWorld component without
    // tests to support changes, this test will break
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorld name="Person"/> 
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the supplied name', () => {
        expect(component.text()).toContain(name)
    });

    it("modifies the greeting when frenchify buttin is clicked", () =>{
        component.find("button.FrenchifyButton").simulate('click');
        expect(component.text()).toContain("Bonjour");
    });

    it("calls the passed in removeGreeting function when remove button is clicked", () => {
        component.find("button.RemoveButton").simulate('click');
        expect(mockRemoveGreeting).toBeCalled();
    });

});