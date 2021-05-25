import React from 'react';

import { Toolbar } from '../Toolbar';

import { Gear } from '../../../icons';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';

export function Attach() {
  return (
    <Layout.FullBleed>
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

      <Toolbar
        attach="right"
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
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
    </Layout.FullBleed>
  );
}
Attach.storyName = 'attach';
