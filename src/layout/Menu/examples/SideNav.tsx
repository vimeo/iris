import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../../../components/';
import { Menu } from '../Menu';
import { Panel } from '../../Panel/Panel';
import { Home, Lock, Person } from '../../../icons';
import { core } from '../../../tokens/';

const StyledPanel = styled(Panel)`
  border-right: 1px solid ${core.color.stroke};
  box-shadow: none;
  background-color: ${core.color.background(600)};
`;

const dividerCSS = css`
  content: '';
  height: 1px;
  width: 100%;
  left: 0;
  position: absolute;
  bottom: 0;
  background-color: ${core.color.stroke};
`;

export function SideNav() {
  const folders = (
    <Menu
      style={{
        width: '100%',
      }}
      format="basic"
    >
      <Menu.Section>
        <Menu.Item active={true} toggle icon={<Home />}>
          Home
          <Menu.Item toggle>
            Product
            <Menu.Item toggle>
              Panels
              <Menu.Item toggle>
                November 2020
                <Menu.Item toggle>
                  Folder with a long name
                  <Menu.Item toggle>
                    Another folder with a long name
                  </Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                October 2020
                <Menu.Item toggle>rough cuts</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            Engineering
            <Menu.Item toggle>
              Panels
              <Menu.Item toggle>
                November 2020
                <Menu.Item toggle>
                  rough cuts
                  <Menu.Item toggle>clips</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                October 2020
                <Menu.Item toggle>rough cuts</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            Marketing
            <Menu.Item toggle>
              Panels
              <Menu.Item toggle>
                November 2020
                <Menu.Item toggle>
                  rough cuts
                  <Menu.Item toggle>clips</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                October 2020
                <Menu.Item toggle>rough cuts</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            Sales
            <Menu.Item toggle>
              Panels
              <Menu.Item toggle>
                November 2020
                <Menu.Item toggle>
                  rough cuts
                  <Menu.Item toggle>clips</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                October 2020
                <Menu.Item toggle>rough cuts</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            IT
            <Menu.Item toggle>
              Panels
              <Menu.Item toggle>
                November 2020
                <Menu.Item toggle>
                  rough cuts
                  <Menu.Item toggle>clips</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                October 2020
                <Menu.Item toggle>rough cuts</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item>Onboarding</Menu.Item>
          <Menu.Item toggle>Leagal</Menu.Item>
          <Menu.Item>All Hands</Menu.Item>
          <Menu.Item toggle>Archived</Menu.Item>
        </Menu.Item>
      </Menu.Section>
      <Menu.Section>
        <Menu.Item toggle icon={<Lock />}>
          Private to me
          <Menu.Item>WIP</Menu.Item>
          <Menu.Item>Recordings</Menu.Item>
          <Menu.Item toggle>
            Drafts
            <Menu.Item>Subfolder</Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            Meetings
            <Menu.Item>Subfolder</Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            Machinations
            <Menu.Item>Subfolder</Menu.Item>
          </Menu.Item>
        </Menu.Item>
      </Menu.Section>
    </Menu>
  );

  const content = (
    <ContentContainer>
      <TopAnchored>
        <Button fluid format="secondary">
          Manage Videos
        </Button>
      </TopAnchored>
      <FoldersContainer>{folders}</FoldersContainer>
      <BottomAnchored>
        <Menu.Item icon={<Person />}>Manage Team</Menu.Item>
      </BottomAnchored>
    </ContentContainer>
  );

  return (
    <StyledPanel
      active={true}
      attach="left"
      screen={false}
      content={content}
      resizable={true}
    />
  );
}

// const MenuContainer = styled.div`
//   padding: 1rem 0;
//   position: relative;
//   &:not(:only-child):after {
//     content: '';
//     height: 1px;
//     width: 100%;
//     position: absolute;
//     bottom: 0px;
//     background-color: ${core.color.stroke};
//   }
// `;

const TopAnchored = styled.div`
  flex-shrink: 0;
  padding: 0 1rem 1rem 1rem;
  position: relative;
  &:after {
    ${dividerCSS};
    width: 100%;
  }
`;

const BottomAnchored = styled.div`
  position: relative;
  flex-shrink: 0;
  padding-top: 1rem;
  &:before {
    ${dividerCSS};
    top: 0;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
`;

const FoldersContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;
