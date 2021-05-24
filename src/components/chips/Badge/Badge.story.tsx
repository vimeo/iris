import React from 'react';
import { Story } from '@storybook/react';

import { Badge } from './Badge';
import { Props } from './Badge.types';

import { Layout } from '../../../storybook';

export default {
  title: 'Components/Chips/Badge',
  component: Badge,
  argTypes: {
    label: { table: { disable: true } },
    href: { control: { disable: true } },
    target: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge {...args}>Badge</Badge>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Badge';
Controls.args = {
  format: 'upgrade',
};
