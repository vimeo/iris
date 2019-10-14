import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Tag as T } from './Tag';

import { Story } from '../../../storybook';

const Tag = styled(T)`
  margin: 0 1rem 1rem 0;
`;

storiesOf(`components|chips/Tags/`, module)
  .add('basic', () => (
    <Story title="Tag" subTitle="basic">
      <Tag size="xs">Documentary</Tag>
      <Tag size="sm">Animation</Tag>
      <Tag size="md">Narrative</Tag>
      <Tag size="lg">Comedy</Tag>
      <Tag size="lg" onDismiss={() => alert('deleted this tag')}>
        Comedy
      </Tag>
    </Story>
  ))
  .add('image', () => (
    <Story title="Tag" subTitle="image">
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
    </Story>
  ));
