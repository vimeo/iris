import React from 'react';
import styled, { css } from 'styled-components';
import { em } from 'polished';

import * as Illustrations from './index';
import { Header } from '../typography';
import { slate } from '../color';

export default { title: 'illustration|Illustrations/' };

export function All() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Illustrations).map((illustration, i) => (
        <Card key={i}>
          <Header size="2" style={{ marginBottom: '0.25rem' }}>
            {illustration}
          </Header>

          <Illustration name={illustration} />
        </Card>
      ))}
    </div>
  );
}

function Illustration({ name }) {
  const Illustration = Illustrations[name];
  if (!Illustration) return null;

  return (
    <Wrap>
      <Illustration />
    </Wrap>
  );
}

const Wrap = styled.div`
  svg {
    width: 20rem;
    height: 20rem;
    display: block;
    margin: 3rem auto;
  }
`;

const width = widthMap =>
  Object.keys(widthMap).map(
    minWidth => css`
      @media screen and (min-width: ${em(768)}) {
        width: calc(${widthMap[minWidth]}% - 4rem);
      }
    `,
  );

const Card = styled.div`
  border-radius: 0.125rem;
  width: 100%;
  border: 1px solid ${slate(100)};
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 1.25rem;
  display: inline-block;

  ${width({
    70: 50,
  })};
`;
