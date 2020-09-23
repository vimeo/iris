import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Dock as D } from './Dock';
import { Lock, Gear, Stats, ReviewCheck } from '../../icons';
import { Header } from '../../typography';
import { Button } from '../../components';
import { slate } from '../../color';

export default {
  title: 'layout/Dock',
};

export function Common() {
  return (
    <Dock
      css={`
        margin: 1rem;
      `}
    >
      <Content>
        <IconSection>
          <Gear />
        </IconSection>
        <Header size="6">Settings</Header>
      </Content>
    </Dock>
  );
}

export function Attach() {
  return (
    <>
      <Dock attach="left">
        <Content>
          <Header size="6">left</Header>
          <Header size="6">
            [50, 0],
            <br />
            [100, 0]
          </Header>
        </Content>
      </Dock>
      <Dock attach="right">
        <Content>
          <Header size="6">right</Header>
          <Header size="6">
            [50, 100],
            <br />
            [100, 100]
          </Header>
        </Content>
      </Dock>
      <Dock attach="bottom">
        <Content>
          <Header size="6">bottom</Header>
          <Header size="6">
            [100, 50],
            <br />
            [100, 50]
          </Header>
        </Content>
      </Dock>
      <Dock attach="top">
        <Content>
          <Header size="6">top</Header>
          <Header size="6">
            [0, 50],
            <br />
            [0, 50]
          </Header>
        </Content>
      </Dock>
      <Dock attach="topRight">
        <Content>
          <Header size="6">topRight</Header>
          <Header size="6">
            [0, 100], <br />
            [100, 100]
          </Header>
        </Content>
      </Dock>
      <Dock attach="bottomLeft">
        <Content>
          <Header size="6">bottomLeft</Header>
          <Header size="6">
            [100, 0], <br />
            [100, 0]
          </Header>
        </Content>
      </Dock>
      <Dock attach="bottomRight">
        <Content>
          <Header size="6">bottomRight</Header>
          <Header size="6">
            [100, 100], <br />
            [100, 100]
          </Header>
        </Content>
      </Dock>
      <Dock attach="topLeft">
        <Content>
          <Header size="6">topLeft</Header>
          <Header size="6">
            [0, 0], <br />
            [0, 0]
          </Header>
        </Content>
      </Dock>
    </>
  );
}

export function VerticalDock() {
  return (
    <D
      attach="right"
      css={`
        margin-top: 10rem;
      `}
    >
      <Content>
        <IconSection>
          <Lock />
        </IconSection>
        <Header size="6">Privacy</Header>
        <IconSection>
          <ReviewCheck />
        </IconSection>
        <Header size="6">Review</Header>
        <IconSection>
          <Stats />
        </IconSection>
        <Header size="6">Analytics</Header>
        <IconSection>
          <Gear />
        </IconSection>
        <Header size="6">Settings</Header>
      </Content>
    </D>
  );
}

export function HorizontalDock() {
  return (
    <Dock attach="bottom">
      <Content2>
        <Header size="6" style={{ color: 'white' }}>
          This is a dock.
        </Header>
        <div style={{ display: 'flex' }}>
          <Button format="secondary" style={{ marginLeft: '1rem' }}>
            Edit
          </Button>
          <Button format="secondary" style={{ marginLeft: '1rem' }}>
            Share
          </Button>
        </div>
      </Content2>
    </Dock>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 6rem;
`;

const Content2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: ${slate(800)};
  padding: 0.5rem 2rem;
  color: white;
`;

const IconSection = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1.5rem 0 0.5rem;
`;

const Dock = styled(D)`
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;
