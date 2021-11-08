import React from 'react';
import styled from 'styled-components';

import { NewItemCard } from '../NewItemCard';
import { tokens } from '../NewItemCard.tokens';

import { Layout } from '../../../../storybook';
import { Header } from '../../../../typography';

export default {
  title: 'components/NewItemCard/examples',
  component: NewItemCard,
};

export function VideoLibrary() {
  return (
    <Layout.FullBleed style={{ display: 'block' }}>
      <Mast>
        <Header size="plusUltra">Header</Header>
      </Mast>
      <Row>
        <div>
          <PlaceholderCard style={style} />
          <NewItemCard style={style}>Add New Item</NewItemCard>
        </div>
      </Row>
      <Row>
        <div>
          <PlaceholderCard style={style} />
          <PlaceholderCard style={style} />
          <NewItemCard style={style}>Add New Item</NewItemCard>
        </div>
      </Row>
    </Layout.FullBleed>
  );
}

const style = {
  width: '400px',
  height: '260px',
  margin: '0 1rem',
  borderRadius: '0.25rem',
};

const Mast = styled.div`
  width: 100%;
  min-height: calc(20vh + 20rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
      62.61% 62.61% at 95.23% 6.02%,
      #160e71 0%,
      rgba(19, 13, 92, 0.26) 54.71%,
      rgba(90, 35, 248, 0) 100%
    ),
    linear-gradient(
      72.48deg,
      #ef516d 2.61%,
      rgba(106, 103, 227, 0) 56.18%
    ),
    radial-gradient(
      45.23% 45.23% at 35.11% -11.02%,
      #7936ae 0%,
      rgba(121, 54, 174, 0) 100%
    ),
    radial-gradient(
      94.51% 124.88% at 94.32% 94.43%,
      rgba(65, 244, 255, 0.78) 0%,
      rgba(131, 218, 255, 0.6552) 32.29%,
      rgba(99, 175, 240, 0.3978) 64.06%,
      rgba(43, 90, 211, 0) 100%
    ),
    linear-gradient(313.04deg, #341d65 0.93%, #604aea 125.68%);
`;

const Row = styled.div`
  padding: 2rem;
  margin: 1rem;
  width: 100%;
  overflow: scroll;

  > div {
    display: flex;
    width: 1500px;
  }
`;

const PlaceholderCard = styled.div`
  width: 400px;
  height: 260px;
  margin: 0 1rem;
  background: ${tokens.background};
`;
