import React from 'react';
import { Story } from '@storybook/react';

import { CardNewItem as NIC, Props } from './CardNewItem';

import styled from 'styled-components';

export default {
  title: 'components/CardNewItem',
  component: NIC,
  argTypes: {
    rel: { control: { disable: true } },
    target: { control: { disable: true } },
    href: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return <CardNewItem {...args}>Add New Item</CardNewItem>;
};

export const Controls = Template.bind({});
Controls.storyName = 'CardNewItem';

const CardNewItem = styled(NIC)`
  width: 26rem;
  height: 18rem;
`;
