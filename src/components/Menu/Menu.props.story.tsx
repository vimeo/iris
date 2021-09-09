import React from 'react';

import { Menu } from './Menu';

import { Layout } from '../../storybook';
import { Folder, Home, Grid, Gear } from '../../icons';

export default { title: 'components/Menu/props', component: Menu };

export function Format() {
  return (
    <Layout.StoryVertical>
      <Menu
        format="basic"
        style={{ marginBottom: '1rem', padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item active icon={<Home />}>
            Item 1 S1
          </Menu.Item>
          <Menu.Item icon={<Gear />}>Item 2 S1</Menu.Item>
        </Menu.Section>

        <Menu.Section title="Section 2">
          <Menu.Item icon={<Folder />}>Item 1 S2</Menu.Item>
          <Menu.Item icon={<Grid />}>Item 2 S2</Menu.Item>
        </Menu.Section>
      </Menu>

      <Menu format="secondary" style={{ padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item active icon={<Home />}>
            Item 1 S1
          </Menu.Item>
          <Menu.Item icon={<Gear />}>Item 2 S1</Menu.Item>
        </Menu.Section>

        <Menu.Section title="Section 2">
          <Menu.Item icon={<Folder />}>Item 1 S2</Menu.Item>
          <Menu.Item icon={<Grid />}>Item 2 S2</Menu.Item>
        </Menu.Section>
      </Menu>
    </Layout.StoryVertical>
  );
}
