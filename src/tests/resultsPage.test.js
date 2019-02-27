import React from 'react';
import ResultsPage from '../components/pages/ResultsPage';
import { shallow } from 'enzyme';

const incorrectQuestionsMock = [{
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
    }];
const determineSolutionMock = jest.fn();
const userAnswersMock = [];

describe('ResultsPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ResultsPage
                incorrectQuestions={incorrectQuestionsMock}
                determineSolution={determineSolutionMock}
                userAnswers={userAnswersMock}
            />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});