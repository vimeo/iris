import React from 'react';

import { Link } from './Link';

import { Layout } from '../../storybook';

export default { title: 'typography/Link' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Link>Click me!</Link>
    </Layout.StoryVertical>
  );
}

export function Format() {
  return (
    <Layout.StoryVertical>
      <Link format="basic">Click me!</Link>
      <Link format="soft">Click me!</Link>
      <Link format="primary">Click me!</Link>
      <Link format="positive">Click me!</Link>
      <Link format="negative">Click me!</Link>
    </Layout.StoryVertical>
  );
}

export function Variant() {
  return (
    <Layout.StoryVertical>
      <Link>Click me!</Link>
      <Link variant="minimal">Click me!</Link>
    </Layout.StoryVertical>
  );
}

export function Custom() {
  return (
    <Layout.StoryVertical>
      <Link
        css={`
          font-weight: 800;
        `}
      >
        Click me!
      </Link>
      <Link
        css={`
          font-weight: 300;
          color: inherit;
        `}
      >
        Click me!
      </Link>
      <Link
        variant="minimal"
        css={`
          font-weight: 600;
          color: inherit;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.02rem;
        `}
      >
        Click me!
      </Link>
    </Layout.StoryVertical>
  );
}
