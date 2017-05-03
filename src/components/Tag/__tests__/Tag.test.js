import React from 'react';
import { shallow, mount } from 'enzyme';
import Tag from '../index.tsx';

describe('Tag', () => {
    // 基础测试
    it('Test children', () => {
        const wrapper = shallow(
            <Tag value={1}>子元素</Tag>
        );
        expect(wrapper.find('.wl-tag-text').text()).toBe('子元素');
        expect(wrapper.find('.wl-tag-close')).toHaveLength(1);
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(0);

    });

    it('Test prop: selected = true', () => {
        const wrapper = shallow(
            <Tag selected={ true } value={1}>子元素</Tag>
        );
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(1);
    });

    it('Test prop: onClick', () => {
        const onTagClick = jest.fn();
        const wrapper = shallow(
            <Tag onClick={ onTagClick } value={1}>子元素</Tag>
        );
        wrapper.find('.wl-tag').simulate('click');
        expect(onTagClick).toHaveBeenCalledTimes(1);
    });

    it('Test prop: closable = false', () => {
        const wrapper = shallow(
            <Tag closable={ false } value={1}>子元素</Tag>
        );
        expect(wrapper.find('.wl-tag-close')).toHaveLength(0);
    });


    it('Test prop: closable not defined(equal true)', () => {
        const wrapper = shallow(
            <Tag value={1}>子元素</Tag>
        );
        expect(wrapper.find('.wl-tag-close')).toHaveLength(1);
    });

    it('Test prop: onClose', () => {
        const onTagClose = jest.fn();
        const value = 1000;
        const wrapper = shallow(
            <Tag
                onClose={ onTagClose }
                value={ value }
            >
                子元素
            </Tag>
        );
        wrapper.find('.wl-tag-close').simulate('click');
        expect(onTagClose).toHaveBeenCalledTimes(1);
        expect(onTagClose).toHaveBeenCalledWith(value);
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

        expect(wrapper.find('.wl-tag-close')).toHaveLength(1);
        wrapper.find('.wl-tag-close').simulate('click');
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
        expect(wrapper.find('.wl-tag-close')).toHaveLength(0);

        expect(wrapper.find('.wl-tag-selected')).toHaveLength(1);
        wrapper.setProps({selected: false});
        expect(wrapper.find('.wl-tag-selected')).toHaveLength(0);
    });
});