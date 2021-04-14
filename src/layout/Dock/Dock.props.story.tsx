import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Dock as D } from './Dock';
import { Header } from '../../typography';

export default {
  title: 'layout/Dock/Props',
  component: D,
};

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

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 6rem;
`;

const Dock = styled(D)`
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;
