import React from 'react';
import { Story } from '@storybook/react';

import { NewItemCard as NIC, Props } from './NewItemCard';

import styled from 'styled-components';

export default {
  title: 'components/NewItemCard',
  component: NIC,
  argTypes: {
    rel: { control: { disable: true } },
    target: { control: { disable: true } },
    href: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return <NewItemCard {...args}>Add New Item</NewItemCard>;
};

export const Controls = Template.bind({});
Controls.storyName = 'NewItemCard';

const NewItemCard = styled(NIC)`
  width: 26rem;
  height: 18rem;
`;
