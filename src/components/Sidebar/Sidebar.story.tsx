import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Props } from './Sidebar.types';

import { Gear } from '../../icons';
import { Header as H } from '../../typography';
import { Layout } from '../../storybook';

export default {
  title: 'components/Sidebar',
  component: Sidebar,
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
      <Sidebar attach="left" {...args} style={style}>
        <Sidebar.Item label="Item 1" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 2" icon={<Gear />}>
          <Header size="3">Item 2</Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 3" icon={<Gear />}>
          <Header size="3">Item 3</Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 4" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 5" icon={<Gear />}>
          <Header size="3">Item 4</Header>
        </Sidebar.Item>
      </Sidebar>
    </Layout.FullBleed>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Sidebar';
