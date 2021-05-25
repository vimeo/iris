import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { Toolbar, Props } from './Toolbar';

import { Gear } from '../../icons';
import { Header } from '../../typography';

export default {
  title: 'layout/Toolbar',
  component: Toolbar,
  argTypes: {
    state: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: 0,
        margin: '-1rem',
        height: '100vh',
      }}
    >
      <Toolbar attach="left">
        <Toolbar.Item label="Item 1" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 2" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 2
          </Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 3" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 3
          </Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 4" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 5" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 4
          </Header>
        </Toolbar.Item>
      </Toolbar>
    </div>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Toolbar';
