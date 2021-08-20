import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Dock as D } from '../Dock/Dock';
import { Nav } from './Nav.story';
import { Header } from '../../typography';
import { VideoList } from './VideoList.story';
import { Button } from '../../components';
import { slate } from '../../color';

export function Showcase() {
  return (
    <Layout>
      <Nav />
      <HeroImage>
        <Header size="plusUltra" style={{ color: 'white' }}>
          Showcase
        </Header>
      </HeroImage>
      <Content>
        <VideoList />
      </Content>
      <HorizontalDock />
    </Layout>
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

const Content2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: ${slate(800)};
  padding: 0.5rem 2rem;
  color: white;
`;

const Dock = styled(D)`
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

const Layout = styled.div`
  display: grid;
`;

const Content = styled.div`
  padding: 2rem;
`;

const HeroImage = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('http://placekitten.com/1440/600');
  background-size: cover;
`;
