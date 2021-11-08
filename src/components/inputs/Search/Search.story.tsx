import React from 'react';
import { Story } from '@storybook/react';

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

const Template: Story<Props> = (args) => {
  return (
    <Search
      css={`
        max-width: 40rem;
      `}
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
