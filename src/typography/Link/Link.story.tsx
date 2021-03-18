import React from 'react';
import { Story } from '@storybook/react';

import { Link } from './Link';
import { Props } from './Link.types';

export default {
  title: 'typography/Link',
  component: Link,
  argTypes: {
    target: { control: { disable: true } },
    href: { control: { disable: true } },
    variant: {
      control: { type: 'select', options: ['minimal', undefined] },
    },
  },
};

const Template: Story<Props> = (args) => {
  return <Link {...args}>Click me!</Link>;
};
export const Controls = Template.bind({});
Controls.storyName = 'Link';
