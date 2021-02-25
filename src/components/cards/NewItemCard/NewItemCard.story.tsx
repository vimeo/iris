import React from 'react';
import { Story } from '@storybook/react';

import { NewItemCard, Props } from './NewItemCard';

import { Grid } from '../../../layout';

export default {
  title: 'Components/Cards/NewItemCard',
  component: NewItemCard,
  argTypes: {
    rel: { control: { disable: true } },
    target: { control: { disable: true } },
    href: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Grid>
      <NewItemCard
        {...args}
        onClick={() => console.log('add new item')}
        href="#"
      >
        Add New Item
      </NewItemCard>
      <NewItemCard
        {...args}
        onClick={() => console.log('add new item')}
        href="#"
      >
        Add New Item
      </NewItemCard>
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'NewItemCard';
