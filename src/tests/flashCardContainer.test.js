import React from 'react';
import FlashCardContainer from '../components/FlashCardContainer';
import { shallow } from 'enzyme';

const mockData = [{
    "id": 1,
    "prototype": "shift()",
    "answer": "Removes and returns the first item in an Array",
    "incorrectChoices": [
        "pop()",
        "push()",
        "unshift()"
    ],
    "method": "mutator",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
},
{
    "id": 2,
    "prototype": "copyWithin()",
    "answer": "Shallow copies part of an array to another location in the same array and returns it, without modifying its size",
    "incorrectChoices": [
        "splice()",
        "findIndex()",
        "concat()"
    ],
    "method": "mutator",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
}
]
describe('FlashCardContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <FlashCardContainer
                prototype={mockData}
            />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have the proper default state', () => {
        expect(wrapper.state()).toEqual({ rangeValue: 1 });
    });

    it('should determine the range value', () => {
        expect(wrapper.state('rangeValue')).toEqual(1);
        wrapper.find('.range-bar').simulate('change', { target: { value: 2 } });
    });



});