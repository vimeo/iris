import React, { useState } from 'react';
import styled from 'styled-components';

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

/**
 * The PageWrapper will contain the sidebar & the main page content.
 * At this level we will manage the state of whether or not the sidebav is open, as well as its width.
 * The width will be passed to the sidenav & used to calculate the margin of the main page content.
 * To update the width we will pass a callback to the panel component which will be called on resize with the new width value.
 */
export const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [navWidth, setNavWidth] = useState(250);

  const sidenavContent = (
    <ContentContainer>
      <Button fluid format="alternative">
        Manage Videos
      </Button>
      <Tip attach="right" content={'Collapse'}>
        <CollapseButton
          icon={<ChevronLeft />}
          onClick={() => setIsNavOpen(false)}
          pill
          size="sm"
          format="alternative"
        />
      </Tip>
    </ContentContainer>
  );

  return (
    <PageWrapper>
      <Sidenav
        active={isNavOpen}
        attach="left"
        content={sidenavContent}
        minWidth={200}
        onResize={(width) => {
          setNavWidth(width);
        }}
        resizable={true}
        screen={false}
        style={{ width: navWidth }}
      >
        {/* TODO - Panel needs a child - is it ok to use a fragment? */}
        <></>
      </Sidenav>
      {/* Everything in this container will be moved when sidenav resizes */}
      <MainContentContainer
        style={{ marginLeft: isNavOpen ? navWidth : 0 }}
      >
        {/* Pass sidenav state & setter to header so we can control it from there */}
        <MockHeader
          isSidenavOpen={isNavOpen}
          openSidenav={() => setIsNavOpen(true)}
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
  transition: margin 200ms;
  position: relative;
`;

const MockPage = () => {
  return (
    <MockPageContainer>
      <MockHero />
    </MockPageContainer>
  );
};

const MockHeader = ({
  isSidenavOpen,
  openSidenav,
}: {
  isSidenavOpen: boolean;
  openSidenav: () => void;
}) => {
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
};

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
