import React from 'react';

import { Menu } from './Menu';

import { Tip } from '../../components';
import { PopOver } from '../PopOver/PopOver';
import { Pop } from '../PopOver/PopOver.minors';
import { Layout } from '../../storybook';
import {
  Folder,
  Home,
  Grid,
  CirclePlus,
  DotsMenu,
  Gear,
} from '../../icons';

export default { title: 'layout/Menu/Examples', component: Menu };

export function Simple() {
  return (
    <Layout.StoryVertical>
      <Menu style={{ padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item active icon={<Home />}>
            Item 1 S1
          </Menu.Item>
          <Menu.Item href="#" icon={<Gear />}>
            Item 2 S1 (with href)
          </Menu.Item>
        </Menu.Section>

        <Menu.Section title="Section 2">
          <Menu.Item icon={<Folder />}>Item 1 S2</Menu.Item>
          <Menu.Item icon={<Grid />}>Item 2 S2</Menu.Item>
        </Menu.Section>
      </Menu>
    </Layout.StoryVertical>
  );
}

export function Complex() {
  return (
    <Layout.StoryVertical>
      <Menu style={{ padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item toggle>
            Item 1 S1
            <Menu.Item>Item 1 S1 SubItem 1</Menu.Item>
            <Menu.Item>Item 1 S1 SubItem 2</Menu.Item>
            <Menu.Item>Item 1 S1 SubItem 3</Menu.Item>
            <Menu.Item>Item 1 S1 SubItem 4</Menu.Item>
          </Menu.Item>
          <Menu.Item>Item 2 S1</Menu.Item>
        </Menu.Section>

        <Menu.Section title="Section 2">
          <Menu.Item
            action={{
              icon: <CirclePlus />,
              onClick: (e) => console.log(e),
            }}
            icon={<Folder />}
            toggle
          >
            Item 1 S2
            <Menu.Item>Item 1 S2 SubItem 1</Menu.Item>
            <Menu.Item>Item 1 S2 SubItem 2</Menu.Item>
          </Menu.Item>
          <Menu.Item>Item 2 S2</Menu.Item>
        </Menu.Section>

        <Menu.Section title="Section 3">
          <Menu.Item
            action={{
              icon: (
                <Tip attach="top" content="I am a Grid icon">
                  <Grid />
                </Tip>
              ),
              onClick: (e) => console.log(e),
            }}
          >
            Item 1 NoS
          </Menu.Item>
          <Menu.Item label={<Home />}>Item 2 NoS</Menu.Item>
          <Menu.Item>Item 3 NoS</Menu.Item>

          <Menu.Section title="Section 3b">
            <Menu.Item>Item 1 S3</Menu.Item>
            <Menu.Item
              action={{
                icon: (
                  <PopOver content={PopList} attach="right">
                    <DotsMenu
                      onClick={(e) => console.log(e.target)}
                    />
                  </PopOver>
                ),
                onClick: (e) => console.log(e.target),
              }}
            >
              Item 2 S3
            </Menu.Item>
          </Menu.Section>
        </Menu.Section>
      </Menu>
    </Layout.StoryVertical>
  );
}

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
      <Pop.Item href="#" selected>
        Item 4
      </Pop.Item>
    </Pop.List>
  </>
);
