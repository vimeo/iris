import React from 'react';
import styled from 'styled-components';

import { Nav } from './Nav.story';
import { HorizontalDock } from '../Dock/Dock.story';
import { Header } from '../../typography';
import { VideoList } from './VideoList.story';

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
