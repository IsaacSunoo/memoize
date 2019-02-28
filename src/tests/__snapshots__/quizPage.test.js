import React from 'react';
import QuizPage from '../../components/pages/QuizPage';
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

const incorrectQuestionsMock = [];


describe('QuizPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <QuizPage
                prototype={mockData}
                determineSolution={determineSolutionMock}
                incorrectQuestions={incorrectQuestionsMock}
            />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should add to local storage if clicked', () => {
        wrapper.find('.results-btn').simulate('click');
    })

    it('should change quiz page display state', () => {
        expect(wrapper.state('quizPage')).toEqual(true);
        wrapper.instance().displayQuiz();
        expect(wrapper.state('quizPage')).toEqual(false);
    })


});