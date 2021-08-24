import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../../../components/';
import { Menu } from '../Menu';
import { Panel } from '../../Panel/Panel';
import { Home, Lock } from '../../../icons';
import { core } from '../../../tokens/';

const StyledPanel = styled(Panel)`
  ${core.edge(0)};
  background-color: ${core.color.background(800)};
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
      <MenuContainer>
        <Menu.Item toggle icon={<Home />}>
          {'Home'}
          <Menu.Item toggle>
            {'Product'}
            <Menu.Item active={true} toggle>
              {'Panels'}
              <Menu.Item toggle>
                {'November 2020'}
                <Menu.Item toggle>
                  {'rough cuts'}
                  <Menu.Item toggle>{'clips'}</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                {'October 2020'}
                <Menu.Item toggle>{'rough cuts'}</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            {'Engineering'}
            <Menu.Item toggle>
              {'Panels'}
              <Menu.Item toggle>
                {'November 2020'}
                <Menu.Item toggle>
                  {'rough cuts'}
                  <Menu.Item toggle>{'clips'}</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                {'October 2020'}
                <Menu.Item toggle>{'rough cuts'}</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            {'Marketing'}
            <Menu.Item toggle>
              {'Panels'}
              <Menu.Item toggle>
                {'November 2020'}
                <Menu.Item toggle>
                  {'rough cuts'}
                  <Menu.Item toggle>{'clips'}</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                {'October 2020'}
                <Menu.Item toggle>{'rough cuts'}</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>

          <Menu.Item toggle>
            {'Sales'}
            <Menu.Item toggle>
              {'Panels'}
              <Menu.Item toggle>
                {'November 2020'}
                <Menu.Item toggle>
                  {'rough cuts'}
                  <Menu.Item toggle>{'clips'}</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                {'October 2020'}
                <Menu.Item toggle>{'rough cuts'}</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>

          <Menu.Item toggle>
            {'IT'}
            <Menu.Item toggle>
              {'Panels'}
              <Menu.Item toggle>
                {'November 2020'}
                <Menu.Item toggle>
                  {'rough cuts'}
                  <Menu.Item toggle>{'clips'}</Menu.Item>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item toggle>
                {'October 2020'}
                <Menu.Item toggle>{'rough cuts'}</Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Menu.Item>

          <Menu.Item>{'Onboarding'}</Menu.Item>

          <Menu.Item toggle>{'Leagal'}</Menu.Item>

          <Menu.Item>{'All Hands'}</Menu.Item>

          <Menu.Item toggle>{'Archived'}</Menu.Item>
        </Menu.Item>
      </MenuContainer>

      <MenuContainer>
        <Menu.Item toggle icon={<Lock />}>
          {'Private to me'}
          <Menu.Item>{'WIP'}</Menu.Item>
          <Menu.Item>{'Recordings'}</Menu.Item>
          <Menu.Item toggle>
            {'Drafts'}
            <Menu.Item>{'Subfolder'}</Menu.Item>
          </Menu.Item>

          <Menu.Item toggle>
            {'Meetings'}
            <Menu.Item>{'Subfolder'}</Menu.Item>
          </Menu.Item>
          <Menu.Item toggle>
            {'Machinations'}
            <Menu.Item>{'Subfolder'}</Menu.Item>
          </Menu.Item>
        </Menu.Item>
      </MenuContainer>
    </Menu>
  );

  const content = (
    <ContentContainer>
      <TopAnchored>
        <Button fluid format="secondary">
          {'Manage Videos'}
        </Button>
      </TopAnchored>
      <FoldersContainer>{folders}</FoldersContainer>
      <BottomAnchored>
        <Button fluid format="secondary">
          {'Manage Team'}
        </Button>
      </BottomAnchored>
    </ContentContainer>
  );

  return (
    <StyledPanel
      active={true}
      attach="left"
      screen={false}
      content={content}
    />
  );
}

const MenuContainer = styled.div`
  padding: 16px 0;
  position: relative;
  &:not(:only-child):after {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background-color: ${core.color.stroke};
  }
`;

const TopAnchored = styled.div`
  flex-shrink: 0;
  padding: 0 16px 16px 16px;
  position: relative;
  &:after {
    ${dividerCSS};
    width: 100%;
  }
`;

const BottomAnchored = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 16px 16px 0 16px;
  &:before {
    ${dividerCSS};
    top: 0;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
`;

const FoldersContainer = styled.div`
  flex-grow: 1;
  overflow-x: scroll;
`;
