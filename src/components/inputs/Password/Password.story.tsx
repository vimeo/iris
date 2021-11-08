import React from 'react';
import { Story } from '@storybook/react';

import { Password, Props } from './Password';

export default {
  title: 'components/Password',
  component: Password,
  argTypes: {
    src: { table: { disable: true } },
    messages: { table: { disable: true } },
    status: { table: { disable: true } },
    label: {
      control: {
        type: 'select',
        options: ['Password', undefined],
      },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Password
      {...args}
      css={`
        max-width: 20rem;
      `}
    />
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Password';
Controls.args = {
  label: 'Password',
};
