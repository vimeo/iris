import React from 'react';

import { Link } from './Link';

import { Layout } from '../../storybook';

/* eslint-disable import/no-default-export */
export default { title: 'typography|Link/' };
/* eslint-enable import/no-default-export */

export function Common() {
  return (
    <Layout.StoryVertical>
      <Link>Click me!</Link>
    </Layout.StoryVertical>
  );
}
