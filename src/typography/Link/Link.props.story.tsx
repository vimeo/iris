import React from 'react';

import { Link } from './Link';

import { Layout } from '../../storybook';

export default { title: 'typography/Link/props', component: Link };

export function Format({ args }) {
  return (
    <Layout.StoryVertical defaultWidth>
      <Link format="basic" {...args}>
        Click me!
      </Link>
      <Link format="soft">Click me!</Link>
      <Link format="primary">Click me!</Link>
      <Link format="positive">Click me!</Link>
      <Link format="negative">Click me!</Link>
    </Layout.StoryVertical>
  );
}
Format.storyName = 'format';

export function Variant({ args }) {
  return (
    <Layout.StoryVertical defaultWidth>
      <Link {...args}>Click me!</Link>
      <Link variant="minimal">Click me!</Link>
    </Layout.StoryVertical>
  );
}
Variant.storyName = 'variant';
