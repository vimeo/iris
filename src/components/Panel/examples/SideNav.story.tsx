import React, { useState } from 'react';
import styled from 'styled-components';

import { Panel } from '../Panel';

import { Button, Tip } from '../../../components';
import { ChevronRight, HamburgerMenu, Search } from '../../../icons';
import { VimeoLogo } from '../../../illustration';
import { core } from '../../../tokens';

export default {
  title: 'layout/Panel/examples',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * The PageWrapper will contain the sidebar & the main page content.
 * At this level we will manage the state of whether or not the sideNav is open, as well as its width.
 * The width will be passed to the sideNav & used to calculate the margin of the main page content.
 * To update the width we will pass a callback to the panel component which will be called on resize with the new width value.
 */
export const SideNav = () => {
  const [active, activeSet] = useState(true);
  const [dragging, draggingSet] = useState(false);
  const [widthPanel, widthPanelSet] = useState(200);

  const content = (
    <>
      <Button fluid format="alternative">
        Manage Videos
      </Button>
      <Tip attach="right" content={'Collapse'}>
        <CollapseButton
          format="alternative"
          icon={<ChevronRight />}
          onClick={() => activeSet(false)}
          size="xs"
          pill
        />
      </Tip>
      <PanelInfo>Panel Width: {widthPanel}</PanelInfo>
    </>
  );

  const offset = active ? widthPanel : 0;
  const width = `calc(100vw - ${offset}px)`;

  const transition = dragging ? 'none' : 'width 120ms ease-in-out';

  return (
    <>
      <SideNavStyled
        active={active}
        attach="left"
        content={content}
        onDragEnd={() => draggingSet(false)}
        onDragStart={() => draggingSet(true)}
        onResize={(event, { current }) => widthPanelSet(current)}
        screen={false}
        resizable
      />
      {/* Everything in this container will be moved when sideNav resizes */}
      <Main style={{ width, transition }}>
        <Hero>
          <Button
            icon={<HamburgerMenu />}
            variant="hyperminimal"
            format="alternative"
            onClick={() => activeSet(true)}
          />
          <Center>
            <Logo />
          </Center>
          <Button
            icon={<Search />}
            variant="hyperminimal"
            format="alternative"
          />
          <Button format="alternative">New</Button>
        </Hero>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;

const Center = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  text-align: center;
`;

const Logo = styled(VimeoLogo)`
  width: 7rem;

  > * {
    fill: ${core.color.text(300)};
  }
`;

const CollapseButton = styled(Button)`
  transition: opacity 200ms ease-in-out 0ms;
  position: absolute;
  opacity: 0;
  top: 2rem;
  right: -0.875rem;
  z-index: 1;

  &:hover {
    transition: opacity 200ms ease-in-out 150ms;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    transform: translateX(-1px) rotate(180deg);
  }
`;

const SideNavStyled = styled(Panel)`
  min-width: 12.5rem;
  padding: 1.5rem 1rem;

  &:hover,
  &:active {
    ${CollapseButton} {
      opacity: 1;
    }
  }
`;

const Hero = styled.div`
  height: 300px;
  padding: 0.75rem;
  background: ${core.color.background(200)};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PanelInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
