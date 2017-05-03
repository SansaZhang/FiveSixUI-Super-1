import React from 'react';
import Tag from '..';
import renderer from 'react-test-renderer';

// 简陋版GUI测试
// 在最开始需要撰写简单的应用场景，在开发、迭代时会提示对界面的更改，以确保更改是符合预期的


test('Tag demo', () => {
  const component = renderer.create(
    <Tag value={1}>子元素</Tag>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tag demo', () => {
  const onTagClick = jest.fn();
  const key = 1000;
  const component = renderer.create(
    <Tag
      onClick={onTagClick}
      value={key}
      selected={true}
      closable={false}
    >
    label
    </Tag>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});