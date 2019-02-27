import React from 'react';
import CodingPage from '../components/pages/CodingPage';
import { shallow } from 'enzyme';

describe('CodingPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <CodingPage />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});