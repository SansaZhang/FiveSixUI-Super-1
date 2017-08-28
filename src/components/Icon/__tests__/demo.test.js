import React from 'react';
import Icon from '..';
import renderer from 'react-test-renderer';

test('Tag demo', () => {
  const component = renderer.create(
    <Icon type="cross"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});