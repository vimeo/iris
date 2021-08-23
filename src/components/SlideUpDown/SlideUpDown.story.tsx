import React from 'react';
import { Story } from '@storybook/react';

import { SlideUpDown } from './SlideUpDown';
import { Props } from './SlideUpDown.types';

import { Paragraph } from '../../typography';
import { Notice } from '../../components';

export default {
  title: 'components/SlideUpDown',
  component: SlideUpDown,
};

const Template: Story<Props> = (args) => {
  return (
    <SlideUpDown {...args}>
      <Notice format="positive">
        <Paragraph size="2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aut quidem fugiat corrupti inventore eaque. Eaque aspernatur
          sed magni ex reprehenderit deleniti, nemo nihil delectus ab
          dignissimos, beatae molestiae architecto recusandae?
          Molestias accusantium dolorum ipsum quae quibusdam minus
          distinctio accusamus optio.
        </Paragraph>
      </Notice>
    </SlideUpDown>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'SlideUpDown';
Controls.args = {
  showing: true,
  automatic: true,
};
