import React from 'react';
import QuizIntro from '../components/QuizIntro';
import { shallow } from 'enzyme';

const displayQuizMock = jest.fn();

describe('QuizIntro', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <QuizIntro
                display={displayQuizMock}/>
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke change display when clicked', () => {
        wrapper.find('.start-quiz-btn').simulate('click');
    })
});