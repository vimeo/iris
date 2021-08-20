import React from 'react';
import { Story } from '@storybook/react';

import { Toggle, Props } from './Toggle';

import { Layout } from '../../storybook';
import { Eye } from '../../icons';

export default {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  argTypes: {
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
    label: { control: { disable: true } },
    icon: {
      control: { disable: true },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Toggle {...args} label="Toggle" name="demoToggle" />
      <Toggle
        {...args}
        label="Toggle with icon"
        name="demoToggle2"
        icon={<Eye />}
      />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Toggle';
