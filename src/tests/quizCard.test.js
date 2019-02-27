import React from 'react';
import QuizCard from '../components/QuizCard';
import { shallow } from 'enzyme';

const determineSolutionMock = jest.fn();

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

const optionsArrMock = [{
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

const incorrectQuestionsMock = [];
const userAnswersMock = [];

describe('QuizCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <QuizCard
                key={mockData.id}
                proto={mockData}
                options={optionsArrMock}
                incorrectQuestions={incorrectQuestionsMock}
                determineSolution={determineSolutionMock}
                userAnswers={userAnswersMock}
            />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke the compare answer function', () => {
        wrapper.find('.quiz-btn').at(0).simulate('click', { target: { value: 'shift()' } });
        console.log('wrapper', wrapper);

        expect(compareAnswer).toHaveBeenCalled();
    })
});