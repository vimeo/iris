import React from 'react';
import { Story } from '@storybook/react';

import { Paragraph } from './Paragraph';
import { Props } from './Paragraph.types';

export default {
  title: 'typography/Paragraph',
  component: Paragraph,
  argTypes: {
    contentEditable: { control: { disable: true } },
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
Controls.storyName = 'Paragraph';
