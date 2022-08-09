import React from 'react';

import { Link } from '../Link';

import { Layout } from '../../../storybook';

export default { title: 'typography/Link/examples', component: Link };

export function Custom({ args }) {
  return (
    <Layout.StoryVertical defaultWidth>
      <Link
        {...args}
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
Custom.storyName = 'custom styles';
