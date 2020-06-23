import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Tabs } from './Tabs';

import { Header, Paragraph } from '../../typography';
import { Layout } from '../../storybook';

const formats = {
  primary: 'primary',
  alternative: 'alternative',
};

export default { title: 'layout|Tabs/' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Tabs format="primary">
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
          active
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
    </Layout.StoryVertical>
  );
}

export function Variant() {
  return (
    <Layout.StoryVertical>
      <Tabs style={{ width: '30rem' }}>
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
          active
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
      <br />
      <Tabs variant="inlay" style={{ width: '30rem' }}>
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
          active
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
    </Layout.StoryVertical>
  );
}

export function Pill() {
  return (
    <Layout.StoryVertical>
      <Tabs pill variant="inlay" style={{ width: '30rem' }}>
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
          active
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
      <br />
      <Tabs pill style={{ width: '30rem' }}>
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
          active
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
    </Layout.StoryVertical>
  );
}
