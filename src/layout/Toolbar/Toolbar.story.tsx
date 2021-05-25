import React, { useState } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Toolbar } from './Toolbar';
import { Props } from './Toolbar.types';

import { Gear } from '../../icons';
import { Header as H } from '../../typography';
import { Layout } from '../../storybook';

export default {
  title: 'layout/Toolbar',
  component: Toolbar,
  argTypes: {
    state: { control: { disable: true } },
  },
};

const Header = styled(H)`
  margin-top: 0;
`;

const Template: Story<Props> = (args) => {
  const style =
    args.attach === 'right'
      ? ({ position: 'absolute', top: 0, right: 0 } as const)
      : null;

  return (
    <Layout.FullBleed>
      <Toolbar attach="left" {...args} style={style}>
        <Toolbar.Item label="Item 1" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 2" icon={<Gear />}>
          <Header size="3">Item 2</Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 3" icon={<Gear />}>
          <Header size="3">Item 3</Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 4" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 5" icon={<Gear />}>
          <Header size="3">Item 4</Header>
        </Toolbar.Item>
      </Toolbar>
    </Layout.FullBleed>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Toolbar';
