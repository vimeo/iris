import React from 'react';
import { Menu } from '../Menu';

import { Layout } from '../../../storybook';
import { Folder, Home, Camera, VideoStack } from '../../../icons';

export function recursive() {
  return (
    <Layout.StoryVertical>
      <Menu style={{ padding: '1rem' }}>
        <Menu.Section title="Section 1">
          <Menu.Item icon={<Home />}>Home</Menu.Item>
          <Menu.Item toggle icon={<VideoStack />}>
            {'Videos'}
            <Menu.Item toggle icon={<Folder />}>
              {'Panels'}
              <Menu.Item toggle icon={<Folder />}>
                {'November 2020'}
                <Menu.Item toggle icon={<Folder />}>
                  {'rough cuts'}
                  <Menu.Item toggle icon={<Folder />}>
                    {'clips'}
                  </Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle icon={<Folder />}>
                {'October 2020'}
                <Menu.Item toggle icon={<Folder />}>
                  {'rough cuts'}
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
