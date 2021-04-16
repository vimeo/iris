import React from 'react';
import { Story } from '@storybook/react';

import { Select } from './Select';
import { Props } from './Select.types';

import { Layout } from '../../../storybook';
export default {
  title: 'Components/Inputs/Select',
  component: Select,
  argTypes: {
    src: { table: { disable: true } }, // not relevant
    icon: { table: { disable: true } }, // deprecated
    messages: { control: { disable: true } },
    options: { control: { disable: true } },
    onChange: { action: 'Option selected' },
    label: {
      control: {
        type: 'select',
        options: ['Select', undefined],
      },
    },
    format: {
      control: { type: 'select', options: ['basic'] },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Select {...args}>
        <Select.Option value="" disabled hidden>
          Select something...
        </Select.Option>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">Value 2</Select.Option>
        <Select.Option value="3">Value 3</Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Select';
Controls.args = {
  label: 'Select',
};
