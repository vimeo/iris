import React from 'react';

import { Notice, Props } from './Notice';

import { Story } from '@storybook/react';

export default {
  title: 'Components/Info/Notice',
  component: Notice,
  argTypes: {
    icon: { control: { disable: true } },
    onClose: { control: { disable: true } },
    target: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return <Notice {...args}>This is a notice.</Notice>;
};

export const Controls = Template.bind({});
Controls.storyName = 'Notice';
Controls.args = {
  format: 'positive',
};
