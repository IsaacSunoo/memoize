import React from 'react';
import Header from '../components/layout/Header';
import { shallow } from 'enzyme';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Header />
        )
    });

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a default state', () => {
        expect(wrapper.state()).toEqual({ showDropdown: false });
    })

    it('should change the state of dropdown', () => {
        expect(wrapper.state('showDropdown')).toEqual(false);
        wrapper.instance().displayDropdown();
        expect(wrapper.state('showDropdown')).toEqual(true);
    })

});