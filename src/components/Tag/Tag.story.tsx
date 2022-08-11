import React from 'react';
import { Story } from '@storybook/react';

import { Tag } from './Tag';
import { Props } from './Tag.types';

import { Layout } from '../../storybook';

export default {
  title: 'components/Tag',
  component: Tag,
  argTypes: {
    icon: { table: { disable: true } },
    src: {
      control: {
        type: 'select',
        options: [
          'https://i.vimeocdn.com/video/562859486_270x270.jpg',
          undefined,
        ],
      },
    },
    onClose: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical defaultWidth>
      <Tag {...args}>Documentary</Tag>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Tag';

export function Size({ args }) {
  return (
    <Layout.StoryVertical defaultWidth {...args}>
      <Tag size="xs">Documentary</Tag>
      <Tag size="sm">Animation</Tag>
      <Tag size="md">Narrative</Tag>
      <Tag size="lg">Comedy</Tag>
    </Layout.StoryVertical>
  );
}

export function Src({ args }) {
  return (
    <Tag
      {...args}
      size="lg"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    >
      Comedy
    </Tag>
  );
}

export function onClose({ args }) {
  return (
    <Tag
      {...args}
      size="lg"
      onClose={{ reject: () => alert('deleted this tag') }}
    >
      Comedy
    </Tag>
  );
}
