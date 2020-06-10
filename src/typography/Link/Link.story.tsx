import React from 'react';

import { Link } from './Link';

import { Layout } from '../../storybook';

export default { title: 'typography|Link/' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Link>Click me!</Link>
    </Layout.StoryVertical>
  );
}
