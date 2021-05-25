import React from 'react';
import styled from 'styled-components';

import { Sidebar } from '../Sidebar';

import { Gear } from '../../../icons';
import { Header as H } from '../../../typography';
import { Layout } from '../../../storybook';

export function Attach() {
  return (
    <Layout.FullBleed>
      <Sidebar attach="left">
        <Sidebar.Item label="Item 1" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 2" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 2
          </Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 3" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 3
          </Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 4" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 5" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 4
          </Header>
        </Sidebar.Item>
      </Sidebar>

      <Sidebar
        attach="right"
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        <Sidebar.Item label="Item 1" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 2" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 2
          </Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 3" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 3
          </Header>
        </Sidebar.Item>

        <Sidebar.Item label="Item 4" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 1
          </Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item label="Item 5" icon={<Gear />}>
          <Header size="3" style={{ marginTop: 0 }}>
            Item 4
          </Header>
        </Sidebar.Item>
      </Sidebar>
    </Layout.FullBleed>
  );
}
Attach.storyName = 'attach';

const Header = styled(H)`
  margin-top: 0;
`;
