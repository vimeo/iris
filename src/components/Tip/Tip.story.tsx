import React from 'react';
import { Story } from '@storybook/react';

import { Tip } from './Tip';
import { Props } from './Tip.types';

import { Button } from '../../../components';
import { Layout } from '../../../storybook';
import { ANCHOR_POINTS } from '../../utils';

export default {
  title: 'Components/Info/Tip',
  component: Tip,
  argTypes: {
    content: { control: { disable: true } },
    attach: { control: { type: 'select', options: ANCHOR_POINTS } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical center>
      <Tip {...args} content="I am Tip">
        <Button>Tip</Button>
      </Tip>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Tip';
