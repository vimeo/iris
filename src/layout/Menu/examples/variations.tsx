import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';
import { CirclePlus, Folder } from '../../../icons';

const StoryWrapper = styled.div`
  width: 250px;
`;

const longCopy = 'This is how the component handles very long titles';
const shortCopy = 'My Folders';

export function Variations() {
  return (
    <StoryWrapper>
      <Menu style={{ width: '100%' }} format="basic">
        <Menu.Section title="Basic">
          <Menu.Item>{shortCopy}</Menu.Item>
          <Menu.Item>{longCopy}</Menu.Item>
          <Menu.Item toggle>{shortCopy}</Menu.Item>
          <Menu.Item toggle>{longCopy}</Menu.Item>
          <Menu.Item icon={<Folder />}>{shortCopy}</Menu.Item>
          <Menu.Item icon={<Folder />}>{longCopy}</Menu.Item>
          <Menu.Item icon={<Folder />} toggle>
            {shortCopy}
          </Menu.Item>
          <Menu.Item icon={<Folder />} toggle>
            {longCopy}
          </Menu.Item>

          <Menu.Item
            action={{
              icon: <CirclePlus />,
              onClick: (e) => console.log(e),
            }}
          >
            {shortCopy}
          </Menu.Item>
          <Menu.Item
            action={{
              icon: <CirclePlus />,
              onClick: (e) => console.log(e),
            }}
          >
            {longCopy}
          </Menu.Item>

          <Menu.Item
            action={{
              icon: <CirclePlus />,
              onClick: (e) => console.log(e),
            }}
            icon={<Folder />}
            toggle
          >
            {shortCopy}
          </Menu.Item>
          <Menu.Item
            action={{
              icon: <CirclePlus />,
              onClick: (e) => console.log(e),
            }}
            icon={<Folder />}
            toggle
          >
            {longCopy}
          </Menu.Item>
        </Menu.Section>
      </Menu>
    </StoryWrapper>
  );
}
