import React from 'react';
import { Story } from '@storybook/react';

import { Checkbox, Props } from './Checkbox';

import { Layout } from '../../../storybook';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    messages: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
    checked: {
      table: { disable: false },
    },
    disabled: {
      table: { disable: false },
    },
    mirror: {
      table: { disable: false },
    },
    readOnly: {
      table: { disable: false },
    },
    indeterminate: {
      table: { disable: false },
    },
    required: {
      table: { disable: false },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Checkbox {...args} />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Checkbox';
Controls.args = {
  label: 'Checkbox label',
  value: 'checkbox1',
};
