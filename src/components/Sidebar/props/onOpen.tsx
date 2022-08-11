import React from 'react';
import styled from 'styled-components';

import { Sidebar } from '../Sidebar';

import { Gear } from '../../../icons';
import { Header as H } from '../../../typography';
import { Layout } from '../../../storybook';

export function onOpen({ args }) {
  return (
    <Layout.FullBleed {...args}>
      <Sidebar
        attach="left"
        onOpen={(item) => console.log('Open ' + item)}
        onClose={(item) => console.log('Close ' + item)}
      >
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
}
onOpen.storyName = 'onOpen, onClose';

const Header = styled(H)`
  margin-top: 0;
`;
