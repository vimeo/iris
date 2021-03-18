import React from 'react';

import { Story } from '@storybook/react';

import { Text } from './Text';
import { Props } from './Text.types';

export default {
  title: 'typography/Text',
  component: Text,
  argTypes: {
    label: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <>
      <Text {...args}>Text</Text>
    </>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Text';
