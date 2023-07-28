import React from 'react';
import { StoryFn } from '@storybook/react';

import { Search, Props } from './Search';

export default {
  title: 'components/Search',
  component: Search,
  argTypes: {
    src: { table: { disable: true } },
    messages: { table: { disable: true } },
    status: { table: { disable: true } },
    label: {
      control: {
        type: 'select',
        options: ['Search', undefined],
      },
    },
  },
};

const Template: StoryFn<Props> = (args) => {
  return (
    <Search
      style={{ maxWidth: '20rem' }}
      {...args}
      placeholder="Search our videos"
    />
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Search';
Controls.args = {
  label: 'Search',
};
