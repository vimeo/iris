import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import { Button, Tip } from '../../components';
import { ChevronRight, HamburgerMenu, Search } from '../../icons';
import { VimeoLogo } from '../../illustration';
import { core } from '../../tokens';
import { Panel } from './Panel';

export default {
  title: 'layout/Panel/examples',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * The PageWrapper will contain the sidebar & the main page content.
 * At this level we will manage the state of whether or not the sidebav is open, as well as its width.
 * The width will be passed to the sidenav & used to calculate the margin of the main page content.
 * To update the width we will pass a callback to the panel component which will be called on resize with the new width value.
 */
export const SideNav = () => {
  const [active, activeSet] = useState(true);
  const [dragging, draggingSet] = useState(false);
  const [widthPanel, widthPanelSet] = useState(0);

  const sidenavContent = (
    <ContentContainer>
      <Button fluid format="alternative">
        Manage Videos
      </Button>
      <Tip attach="right" content={'Collapse'}>
        <CollapseButton
          format="alternative"
          icon={<ChevronLeft />}
          onClick={() => activeSet(false)}
          size="sm"
          pill
        />
      </Tip>
      <InfoContainer>
        <p>Panel Width: {widthPanel}</p>
      </InfoContainer>
    </ContentContainer>
  );

  const offset = active ? widthPanel : 0;
  const width = `calc(100vw - ${offset}px)`;

  const transition = dragging ? 'none' : 'width 120ms ease-in-out';

  return (
    <PageWrapper>
      <Sidenav
        active={active}
        attach="left"
        content={sidenavContent}
        onDragEnd={() => draggingSet(false)}
        onDragStart={() => draggingSet(true)}
        onResize={(event, { current }) => widthPanelSet(current)}
        screen={false}
        resizable
      />
      {/* Everything in this container will be moved when sidenav resizes */}
      <MainContentContainer style={{ width, transition }}>
        {/* Pass sidenav state & setter to header so we can control it from there */}
        <MockHeader
          active={active}
          menuButton={
            <Button
              icon={<HamburgerMenu />}
              variant="hyperminimal"
              format="alternative"
              onClick={() => activeSet(true)}
            />
          }
        />
        <MockPage />
      </MainContentContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MainContentContainer = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

function MockPage() {
  return (
    <MockPageContainer>
      <MockHero />
    </MockPageContainer>
  );
}

type MockHeaderProps = {
  active: boolean;
  menuButton: ReactElement;
};

function MockHeader({ active, menuButton }: MockHeaderProps) {
  return (
    <MockHeaderContainer>
      <MockHeaderSection>{!active && menuButton}</MockHeaderSection>
      <Logo />
      <MockHeaderSection>
        <Button
          icon={<Search />}
          variant="hyperminimal"
          format="alternative"
        />
        <Button format="alternative">New</Button>
      </MockHeaderSection>
    </MockHeaderContainer>
  );
}

const Logo = styled(VimeoLogo)`
  position: absolute;
  width: 100px;
  left: calc(50% - 50px);
  top: 10px;

  > * {
    fill: ${core.color.text(300)};
  }
`;

const CollapseButton = styled(Button)`
  transition: opacity 200ms 150ms;
  position: absolute;
  opacity: 0;
  top: 28px;
  right: -20px;
  z-index: 1;

  svg {
    width: 22.5px;
    height: 22.5px;
  }
`;

const Sidenav = styled(Panel)`
  min-width: 200px;

  &:hover,
  &:active {
    ${CollapseButton} {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px 16px;
`;

const MockPageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const MockHero = styled.div`
  height: 300px;
  width: 100%;
  background: ${core.color.background(200)};
`;

const MockHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const MockHeaderSection = styled.div`
  display: flex;
  margin-top: 5px;

  > * {
    margin-right: 10px;
  }
`;

const ChevronLeft = styled(ChevronRight)`
  transform: rotate(180deg);
`;

const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
