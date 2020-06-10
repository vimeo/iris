import React from 'react';
import { Tag } from './Tag';

import { Layout } from '../../../storybook';

export default { title: 'components|chips/Tag' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Tag size="xs">Documentary</Tag>
      <Tag size="sm">Animation</Tag>
      <Tag size="md">Narrative</Tag>
      <Tag size="lg">Comedy</Tag>
      <Tag
        size="lg"
        onClose={{ reject: () => alert('deleted this tag') }}
      >
        Comedy
      </Tag>
    </Layout.StoryVertical>
  );
}

export function Image() {
  return (
    <Layout.StoryVertical>
      <Tag
        size="xs"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Beyonce
      </Tag>
      <Tag
        size="sm"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Janelle
      </Tag>
      <Tag
        size="md"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Michelle
      </Tag>
      <Tag
        size="md"
        src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Tessa
      </Tag>
    </Layout.StoryVertical>
  );
}
