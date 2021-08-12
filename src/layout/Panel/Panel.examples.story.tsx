import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { grayscale } from '../../color';
import { Button, Tip } from '../../components';
import { ChevronRight, HamburgerMenu, Search } from '../../icons';
import { VimeoLogo } from '../../illustration';
import { Panel } from './Panel';

export default {
  title: 'layout/Panel/Examples',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
  },
};

const fadeIn = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

const INITIAL_NAV_WIDTH = 250;
const MAX_DRAG_WIDTH = 600;
const MIN_DRAG_WIDTH = 200;

/**
 * The PageWrapper will contain the sidebar & the main page content.
 * At this level we will manage the state of whether or not the sidebav is open, as well as its width.
 * The width will be passed to the sidenav & used to calculate the margin of the main page content.
 * To update the width we will pass a callback to the panel component which will be called on resize with the new width value.
 */
export const SideNav = () => {
  const [dragging, setDragging] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [navWidth, setNavWidth] = useState(INITIAL_NAV_WIDTH);

  const sidenavContent = (
    <ContentContainer>
      <Button fluid format="alternative">
        Manage Videos
      </Button>
      <Tip attach="right" content={'Collapse'}>
        <CollapseButton
          icon={<ChevronLeft />}
          onClick={() => setNavOpen(false)}
          pill
          size="sm"
          format="alternative"
        />
      </Tip>
      <InfoContainer>
        <p>Panel Width: {navWidth}</p>
        <p>Max Drag Width: {MAX_DRAG_WIDTH}</p>
        <p>Min Drag Width: {MIN_DRAG_WIDTH}</p>
      </InfoContainer>
    </ContentContainer>
  );

  return (
    <PageWrapper>
      <Sidenav
        active={navOpen}
        attach="left"
        content={sidenavContent}
        maxDragWidth={MAX_DRAG_WIDTH}
        minDragWidth={MIN_DRAG_WIDTH}
        onResize={(width) => setNavWidth(width)}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        resizable={true}
        screen={false}
      />
      {/* Everything in this container will be moved when sidenav resizes */}
      <MainContentContainer
        dragging={dragging}
        style={{ marginLeft: navOpen ? navWidth : 0 }}
      >
        {/* Pass sidenav state & setter to header so we can control it from there */}
        <MockHeader
          isSidenavOpen={navOpen}
          openSidenav={() => setNavOpen(true)}
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

const COLLAPSE_ANIMATION_DURATION = 300;

const MainContentContainer = styled.div<{ dragging?: boolean }>`
  display: flex;
  height: 100%;
  transition: ${(p) =>
    p.dragging
      ? 'initial'
      : `margin ${COLLAPSE_ANIMATION_DURATION}ms`};
  position: relative;
`;

function MockPage() {
  return (
    <MockPageContainer>
      <MockHero />
    </MockPageContainer>
  );
}

type MockHeaderProps = {
  isSidenavOpen: boolean;
  openSidenav: () => void;
};

function MockHeader({ isSidenavOpen, openSidenav }: MockHeaderProps) {
  return (
    <MockHeaderContainer>
      <MockHeaderSection>
        {!isSidenavOpen && (
          <Button
            icon={<HamburgerMenu />}
            variant="hyperminimal"
            format="alternative"
            onClick={openSidenav}
          />
        )}
      </MockHeaderSection>
      <VimeoLogo
        style={{
          position: 'absolute',
          width: '100px',
          left: 'calc(50% - 50px)',
          top: '10px',
        }}
      />
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
  &:hover,
  &:active {
    ${CollapseButton} {
      opacity: 1;
    }
  }
  animation: ${fadeIn} ${COLLAPSE_ANIMATION_DURATION}ms;
  width: ${INITIAL_NAV_WIDTH}px;
  min-width: ${MIN_DRAG_WIDTH}px;
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
  background: ${grayscale(50)};
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
