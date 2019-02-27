import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { shallow } from 'enzyme';

describe('DropdownMenu', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <DropdownMenu />
        )
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

