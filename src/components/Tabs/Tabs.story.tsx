import React from 'react';
import { Story } from '@storybook/react';

import { Tabs } from './Tabs';
import { Props } from './Tabs.types';

import { Header, Paragraph } from '../../typography';

export default {
  title: 'components/Tabs',
  component: Tabs,
  parameters: {
    lostpixel: {
      disable: true,
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Tabs {...args} style={{ maxWidth: '40rem' }}>
      <Tabs.Panel
        label="Tab 0"
        onOpen={() => console.log('Clicked Tab 0')}
      >
        <Header size="2">I am Tab 0</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onOpen={() => console.log('Clicked Tab 1')}
      >
        <Header size="2">I am Tab 1</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onOpen={() => console.log('Clicked Tab 2')}
      >
        <Header size="2">I am Tab 2</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Tabs';
