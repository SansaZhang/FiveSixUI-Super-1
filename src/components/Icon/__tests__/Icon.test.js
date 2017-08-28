import React from 'react';
import { shallow } from 'enzyme';
import Icon from '..';

describe('Icon', () => {
  it('Test UI', () => {
        const wrapper = shallow(
            <Icon type="cross" className="my-icon-classname" spin={true}/>
        );
        expect(wrapper.find('i')).toHaveLength(1);
        expect(wrapper.find('i').hasClass('my-icon-classname')).toBe(true);
        expect(wrapper.find('i').hasClass('anticon')).toBe(true);
        expect(wrapper.find('i').hasClass('anticon-cross')).toBe(true);
    });
});
