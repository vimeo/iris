import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from './Tag';

storiesOf('components/Tag', module).add(
  'icon only',
  () => (
    <div>
      <div>
        <Tag size="xs">Documentary</Tag>
        <Tag size="sm">Animation</Tag>
        <Tag size="md">Narrative</Tag>
        <Tag size="lg">Comedy</Tag>
        <Tag onDismiss={dismissHandler} size="lg">
          Comedy
        </Tag>
      </div>
      <div>
        <Tag
          size="xs"
          img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        >
          Beyonce
        </Tag>
        <Tag
          size="sm"
          format="dark"
          img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        >
          Janelle
        </Tag>
        <Tag
          size="md"
          img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        >
          Michelle
        </Tag>
        <Tag
          size="md"
          format="dark"
          img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
        >
          Tessa
        </Tag>
      </div>
    </div>
  ),
  {
    info: {
      inline: true,
      propTables: [Tag],
    },
    notes: 'test notes for button',
  },
);

const dismissHandler = () => {
  alert('deleted this tag');
};
