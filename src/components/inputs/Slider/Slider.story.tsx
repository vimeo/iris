import React from 'react';
import { Story } from '@storybook/react';

import { Slider } from './Slider';
import { Props } from './Slider.types';

import { Layout } from '../../../storybook';

export default {
  title: 'components/Slider',
  component: Slider,
};

const Template: Story<Props> = (args) => {
  const { formatter, ...argsWithoutFormatter } = args;
  return (
    <Layout.StoryPadded>
      <Slider
        {...argsWithoutFormatter}
        css={`
          width: 50%;
        `}
      />
    </Layout.StoryPadded>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Slider';
