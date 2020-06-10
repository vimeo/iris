import React from 'react';

import { Avatar } from './Avatar';
import { config } from './Avatar.config';

import { Layout } from '../../../storybook';

export default config;

export function Common() {
  return (
    <Layout.StoryVertical>
      <Avatar
        alt="Extra Small Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="xxs"
      />
      <Avatar
        alt="Extra Small Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="xs"
      />
      <Avatar
        alt="Small Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="sm"
      />
      <Avatar
        alt="Medium Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="md"
      />
      <Avatar
        alt="Large Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="lg"
      />
      <Avatar
        alt="Extra Large Avatar Example"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
        size="xl"
      />
    </Layout.StoryVertical>
  );
}
