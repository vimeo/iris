import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Tabs } from './Tabs';
import { Header, Paragraph } from '../../typography';

import { Story } from '../../storybook';

const componentName = 'Tabs';

const formats = {
  primary: 'primary',
  alternative: 'alternative',
};

storiesOf(`Layout|Tabs/`, module).add('Tabs', () => (
  <Story title={componentName}>
    <Tabs format={select('format', formats, 'alternative')}>
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Header size="2">I am Tab 0</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Header size="2">I am Tab 1</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Header size="2">I am Tab 2</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  </Story>
));
