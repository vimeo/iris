import React from 'react';
import { Story } from '@storybook/react';

import { Notification, Props } from './Notification';

import { Button } from '../../index';

export default {
  title: 'components/Notification',
  component: Notification,
  argTypes: {
    content: { control: { disable: true } },
    duration: { control: { disable: true } },
    actionLabel: { control: { disable: true } },
    action: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Notification content="Notification!" {...args}>
      <Button>Show Notification</Button>
    </Notification>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Notification';
