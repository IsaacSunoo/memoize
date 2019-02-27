import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { shallow } from 'enzyme';

const showDropdownMock = jest.fn();

describe('DropdownMenu', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <DropdownMenu displayDropdown={showDropdownMock}/>
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should toggle state if clicked on', () => {
        wrapper.find('.dropdown-link').at(0).simulate('click');
        expect(showDropdownMock).toHaveBeenCalled();
        wrapper.find('.dropdown-link').at(1).simulate('click');
        expect(showDropdownMock).toHaveBeenCalled();
        wrapper.find('.dropdown-link').at(2).simulate('click');
        expect(showDropdownMock).toHaveBeenCalled();
        wrapper.find('.dropdown-link').at(3).simulate('click');
        expect(showDropdownMock).toHaveBeenCalled();
        wrapper.find('.dropdown-link').at(4).simulate('click');
        expect(showDropdownMock).toHaveBeenCalled();
    })

});

