import React from 'react';
import { shallow, mount } from 'enzyme';
import Tag from '..';

describe('Tag', () => {
    // 基础测试
    it('Test UI', () => {
        const wrapper = shallow(
            <Tag value={1} selected={ true } >子元素</Tag>
        );
        expect(wrapper.find('.wl-tag-text').text()).toBe('子元素');
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(1);
        expect(wrapper.find('Icon')).toHaveLength(1);
    });
    
    it('Test prop: onClick', () => {
        const onTagClick = jest.fn();
        const value = 1000;
        const wrapper = shallow(
            <Tag onClick={ onTagClick } value={value}>子元素</Tag>
        );
        wrapper.find('.wl-tag').simulate('click');
        expect(onTagClick).toHaveBeenCalledTimes(1);
        expect(onTagClick).toHaveBeenCalledWith(value,true);
    });

    it('Test prop: onClose', () => {
        const onTagClose = jest.fn();
        const value = 1000;
        const wrapper = mount(
            <Tag
                onClose={ onTagClose }
                value={ value }
            >
                子元素
            </Tag>
        );
        wrapper.find('Icon').simulate('click');
        expect(onTagClose).toHaveBeenCalledTimes(1);
    });

    //实际引用
    it('Test Example: TagsField组件', () => {
        const onClickTag = jest.fn();
        const onCloseTag = jest.fn();
        const key = 1000;
        const wrapper = mount(
            <Tag
                key={ key }
                onClick={ onClickTag }
                onClose={ onCloseTag }
                value={ key }
                selected={ true }
                >
                label
            </Tag>
        );
        wrapper.find('.wl-tag').simulate('click');
        expect(onClickTag).toHaveBeenCalledTimes(1);

        expect(wrapper.find('Icon')).toHaveLength(1);
        wrapper.find('Icon').simulate('click');
        expect(onCloseTag).toHaveBeenCalledTimes(1);
        
        expect(wrapper.props().value).toEqual(key);
        
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(1);
        wrapper.setProps({selected: false});
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(0);
    });
    it('Test Example: 驿站>操作日志', () => {
        const onTagClick = jest.fn();
        const key = 1000;
        const wrapper = mount(
            <Tag
                key={ key }
                onClick={ onTagClick }
                value={ key }
                selected={ true }
                closable={false}
            >
                label
            </Tag>
        );
        wrapper.find('.wl-tag').simulate('click');

        expect(onTagClick).toHaveBeenCalledTimes(1);
        expect(wrapper.props().value).toEqual(key);
        expect(wrapper.find('.wl-tag-closed')).toHaveLength(0);

        expect(wrapper.find('.wl-tag-selected')).toHaveLength(1);
        wrapper.setProps({selected: false});
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(0);
    });
});