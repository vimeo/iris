import React from 'react';
import { Story } from '@storybook/react';

import { Paragraph } from './Paragraph';
import { Props } from './Paragraph.types';

export default {
  title: 'typography/Paragraph',
  component: Paragraph,
  argTypes: {
    contentEditable: { control: { disable: true } },
    size: {
      control: { type: 'radio', options: [1, 2, 3, 4] },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <>
      <Paragraph {...args}>Paragraph</Paragraph>
    </>
  );
};
export const Controls = Template.bind({});
Controls.args = {
  size: 1,
};
Controls.storyName = 'Paragraph';
