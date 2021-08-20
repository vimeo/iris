import React from 'react';
import { Story } from '@storybook/react';

import { Input } from './Input';
import { Props } from './Input.types';

import { Layout } from '../../../storybook';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    messages: { control: { disable: true } },
    autosuggest: { control: { disable: true } },
    autoComplete: {
      control: { disable: false },
      table: { disable: false },
    },
    indeterminate: {
      control: { disable: true },
      table: { disable: false },
    },
    inlineButton: { control: { disable: true } },
    variant: {
      control: {
        type: 'select',
        options: ['underline', undefined],
      },
    },
    label: {
      control: {
        type: 'select',
        options: ['Input (text)', undefined],
      },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Input placeholder="type something" {...args} />
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Input';
Controls.args = {
  label: 'Input (text)',
};
