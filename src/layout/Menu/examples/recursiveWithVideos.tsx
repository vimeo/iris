import React from 'react';
import { Menu } from '../Menu';

import { Layout } from '../../../storybook';
import {
  Folder,
  Home,
  Camera,
  VideoStack,
  Play,
} from '../../../icons';

export function recursiveWithVideos() {
  return (
    <Layout.StoryVertical>
      <Menu style={{ padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item icon={<Home />}>Home</Menu.Item>
          <Menu.Item toggle icon={<VideoStack />}>
            {'Videos'}
            <Menu.Item icon={<Play />}>Video 1</Menu.Item>
            <Menu.Item icon={<Play />}>Video 2</Menu.Item>
            <Menu.Item toggle icon={<Folder />}>
              {'Panels'}
              <Menu.Item icon={<Play />}>Video 1</Menu.Item>
              <Menu.Item toggle icon={<Folder />}>
                {'November 2020'}
                <Menu.Item icon={<Play />}>Video 1</Menu.Item>
                <Menu.Item toggle icon={<Folder />}>
                  {'rough cuts'}
                  <Menu.Item icon={<Play />}>Video 1</Menu.Item>
                  <Menu.Item icon={<Play />}>Video 2</Menu.Item>
                  <Menu.Item icon={<Play />}>Video 3</Menu.Item>
                  <Menu.Item toggle icon={<Folder />}>
                    {'clips'}
                    <Menu.Item icon={<Play />}>Clip 1</Menu.Item>
                  </Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle icon={<Folder />}>
                {'October 2020'}
                <Menu.Item icon={<Play />}>Video 1</Menu.Item>
                <Menu.Item icon={<Play />}>Video 2</Menu.Item>
                <Menu.Item toggle icon={<Folder />}>
                  {'rough cuts'}
                  <Menu.Item icon={<Play />}>Video 1</Menu.Item>
                </Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item icon={<Camera />}>Live Events</Menu.Item>
        </Menu.Section>
      </Menu>
    </Layout.StoryVertical>
  );
}
