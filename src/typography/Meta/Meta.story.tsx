import React from 'react';
import { Story } from '@storybook/react';

import { Meta } from './Meta';
import { Props } from './Meta.types';

export default {
  title: 'typography/Meta',
  component: Meta,
  argTypes: {
    contentEditable: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <>
      <Meta {...args}>Meta</Meta>
    </>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Meta';
